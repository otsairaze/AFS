import { Link } from 'react-router';
import { Button } from '../../../..';
import styles from './Navigation.module.scss';
import { useNavigation } from './useNavigation';
export const Navigation = () => {
  const { items } = useNavigation();

  return (
    <div className={styles.navigation}>
      {items.map((item, index) => (
        <Button
          variant='navigation'
          key={index}
          className={styles.navButton}
          data-push-down={index === 3 ? 'true' : undefined}
        >
          <Link to={Array.isArray(item.path) ? item.path[0] : item.path}>
            <item.svg />
          </Link>
        </Button>
      ))}
    </div>
  );
};
