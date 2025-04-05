import { Navigation } from './components';
import styles from './AsideMenu.module.scss';

export const AsideMenu = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
    </aside>
  );
};
