import { PlusCircle } from 'phosphor-react';
import { ClipboardText } from 'phosphor-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { HeaderComponent } from './components/HeaderComponent';
import { ITask, TaskComponent } from './components/TaskComponent';

import styles from './styles/app.module.css';
import './styles/reset.css';

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const ordenedTasks: ITask[] = tasks.sort((task) => {
    if (task.isDone) {
      return 1;
    } else if (!task.isDone) {
      return -1;
    } else {
      return 0;
    }
  });

  const numberOfFinishedTasks = tasks.reduce((sum, task) => {
    if (task.isDone) return sum + 1;
    else return sum;
  }, 0);

  const isTasksEmpty = tasks.length > 0;

  const handleTextAreaValue = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskText(event.target.value);

  const addNewTask = (content: string) => {
    setTasks((state) => [
      ...state,
      {
        id: crypto.randomUUID(),
        content,
        isDone: false,
      },
    ]);

    setTaskText('');
  };

  const deleteTask = (taskId: string) => {
    const listWithoutSelectedOne = tasks.filter((task) => task.id !== taskId);
    setTasks(listWithoutSelectedOne);
  };

  const handleOnTaskDone = (taskId: string) => {
    const updatedTasksList = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          isDone: !task.isDone,
        };

      return task;
    });

    setTasks(updatedTasksList);
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem('tasks');
    if (localStorageData && localStorageData.length > 2) {
      setTasks(JSON.parse(localStorageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <HeaderComponent />
      <main className={styles.container}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addNewTask(taskText);
          }}
          className={styles['create-task-form']}
        >
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Adicione uma nova tarefa"
            onChange={handleTextAreaValue}
            value={taskText}
            required
          />
          <button type="submit" disabled={!taskText}>
            Criar <PlusCircle size={24} />
          </button>
        </form>

        <section className={styles.tasks}>
          <header>
            <h4 className={styles['number-of-tasks']}>
              Tarefas criadas <span>{tasks.length}</span>
            </h4>
            <h4 className={styles['done-tasks']}>
              Concluídas{' '}
              <span>
                {isTasksEmpty
                  ? `${numberOfFinishedTasks} de ${tasks.length}`
                  : 0}
              </span>
            </h4>
          </header>

          <ul className={styles['tasks__list']}>
            {isTasksEmpty ? (
              ordenedTasks.map((task) => (
                <li>
                  <TaskComponent
                    id={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onTaskDone={handleOnTaskDone}
                  />
                </li>
              ))
            ) : (
              <div className={styles.tasks__empty}>
                <ClipboardText size={64} weight="thin" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};
