import { PlusCircle } from 'phosphor-react';
import { HeaderComponent } from './components/HeaderComponent';

import styles from './styles/app.module.css';
import './styles/reset.css';

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
      </main>
    </div>
  );
};
