import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { CheckboxComponent } from '../CheckboxComponent';
import styles from './styles.module.css';

export interface ITask {
  id: string;
  content: string;
  isDone?: boolean;
}

export interface TaskComponentProps {
  task: ITask;
  id: string;
  onDelete?: (content: string) => void;
  onTaskDone: (content: string) => void;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({
  id,
  task,
  onDelete,
  onTaskDone,
}) => {
  return (
    <label
      htmlFor={id}
      className={`${styles.task} ${task.isDone ? styles.done : ''}`}
    >
      <CheckboxComponent
        checked={task.isDone}
        onChange={() => onTaskDone(task.id)}
        id={id}
      />
      <p>{task.content}</p>
      <button
        type="button"
        onClick={() => onDelete && onDelete(task.id)}
        className={styles.delete__task}
        aria-label="Deletar tarefa"
        title="Deletar tarefa"
      >
        <Trash size={18} />
      </button>
    </label>
  );
};
