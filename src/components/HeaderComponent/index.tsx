import styles from './styles.module.css';

import logo from '../../assets/logo.svg';

export const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Blue rocket icon"
        className={styles['header-logo']}
      />
      <p className={styles['app-name']}>
        TO<span>DO</span>
      </p>
    </header>
  );
};
