import { Outlet } from 'react-router';
import { AsideMenu, Container } from '../../components';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <>
      <AsideMenu />
      <Container className={styles.layout}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Container>
    </>
  );
};
