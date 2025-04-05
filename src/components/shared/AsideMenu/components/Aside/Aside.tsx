import { Typography } from '@/components';
import { AsideLayout } from '@/layouts';
import { useNavigation } from '../Navigation/hooks';
import styles from './Aside.module.scss';
import { SubItemButton } from './components';
import { Link } from 'react-router';

export const Aside = () => {
  const { items } = useNavigation();

  return (
    <AsideLayout
      renderHeader={() => (
        <Typography variant='title20_semibold' color='primary' tag='h2'>
          Oak Tree Cemetery
        </Typography>
      )}
      renderSubHeader={() => (
        <Typography variant='paragraph16_regular' color='primary' tag='p'>
          Process Manager
        </Typography>
      )}
      renderFooter={() => (
        <Typography variant='paragraph16_regular' color='subtitle' tag='p'>
          All Funeral Services © 2015-2025
        </Typography>
      )}
    >
      <div className={styles.asideItem}>
        {items.flatMap((item) =>
          item.subItems?.map((subItem, subIndex) => (
            <Link to={subItem.path}>
              <SubItemButton key={subIndex} subItem={subItem} />
            </Link>
          ))
        )}
      </div>
    </AsideLayout>
  );
};
