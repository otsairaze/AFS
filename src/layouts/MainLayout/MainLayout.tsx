import { Outlet } from 'react-router';
import { AsideMenu, Container } from '../../components';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <AsideMenu />
      <Container>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
