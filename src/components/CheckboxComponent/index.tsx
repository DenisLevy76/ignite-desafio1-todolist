import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

export const CheckboxComponent: React.FC<
  InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`${styles.checkbox} ${className}`}
      {...props}
    />
  );
};
