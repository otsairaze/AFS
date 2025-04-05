import styles from './AsideMenu.module.scss';
import { Aside, Navigation } from './components';

export const AsideMenu = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
      <Aside />
    </aside>
  );
};
