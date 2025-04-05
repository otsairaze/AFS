import { SvgProvider } from '@/assets/svg/SvgProvider';
import { useNavigation } from './hooks/useNavigation';
import styles from './Navigation.module.scss';
import { Button } from '@/components/ui';
import { Link } from 'react-router';

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
            <SvgProvider variant='svg-primary' SvgComponent={item.svg} />
          </Link>
        </Button>
      ))}
    </div>
  );
};
