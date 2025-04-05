import styles from './Navigation.module.scss';
import { useNavigation } from './useNavigation';

export const Navigation = () => {
  const { items } = useNavigation();

  return (
    <div className={styles.navigation}>
      {items.map((item, index) => (
        <button
          key={index}
          className={styles.navButton}
          data-push-down={index === 3 ? 'true' : undefined}
        >
          <item.svg />
        </button>
      ))}
    </div>
  );
};
