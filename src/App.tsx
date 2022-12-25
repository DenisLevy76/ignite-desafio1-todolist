import { PlusCircle } from 'phosphor-react';
import { ClipboardText } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { HeaderComponent } from './components/HeaderComponent';
import { ITask, TaskComponent } from './components/TaskComponent';

import styles from './styles/app.module.css';
import './styles/reset.css';

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const handleTextAreaValue = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskText(event.target.value);

  const addNewTask = (content: string) => {
    setTasks((state) => [
      ...state,
      {
        content,
      },
    ]);

    setTaskText('');
  };

  const deleteTask = (taskContent: string) => {
    const listWithoutSelectedOne = tasks.filter(
      (task) => task.content !== taskContent
    );
    setTasks(listWithoutSelectedOne);
  };

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
          <button type="submit">
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
              <span>{tasks.length > 0 ? `${0} de ${tasks.length}` : 0}</span>
            </h4>
          </header>

          <ul className={styles['tasks__list']}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <li>
                  <TaskComponent task={task} onDelete={deleteTask} />
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
