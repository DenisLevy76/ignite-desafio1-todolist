import { PlusCircle } from 'phosphor-react';
import { ClipboardText } from 'phosphor-react';
import { HeaderComponent } from './components/HeaderComponent';

import styles from './styles/app.module.css';
import './styles/reset.css';

const tasks: string[] = [];

export const App = () => {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.container}>
        <form className={styles['create-task-form']}>
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar <PlusCircle size={24} />
          </button>
        </form>

        <section className={styles.tasks}>
          <header>
            <h4 className={styles['number-of-tasks']}>
              Tarefas criadas <span>0</span>
            </h4>
            <h4 className={styles['done-tasks']}>
              Concluídas <span>0</span>
            </h4>
          </header>

          <ul className={styles['tasks__list']}>
            {tasks.length > 0 ? (
              tasks.map((task) => <li>{task}</li>)
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
