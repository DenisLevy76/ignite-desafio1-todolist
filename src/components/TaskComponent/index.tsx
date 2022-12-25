import { Trash } from 'phosphor-react';
import { CheckboxComponent } from '../CheckboxComponent';
import styles from './styles.module.css';

export interface ITask {
  content: string;
  isDone?: boolean;
}

export interface TaskComponentProps {
  task: ITask;
  onDelete?: (content: string) => void;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({
  task,
  onDelete,
}) => {
  return (
    <article className={styles.task}>
      <CheckboxComponent />
      <p>{task.content}</p>
      <button
        type="button"
        onClick={() => onDelete && onDelete(task.content)}
        className={styles.delete__task}
      >
        <Trash size={18} />
      </button>
    </article>
  );
};
