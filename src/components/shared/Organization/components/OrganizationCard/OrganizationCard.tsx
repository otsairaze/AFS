import { Typography } from '@/components/shared/Typography/Typography';
import { Button } from '@/components/ui';
import styles from './OrganizationCard.module.scss';
import { OrganizationInfo } from './components';

export const OrganizationCard = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.content}>
          <Typography variant='title20_semibold' tag='h3'>
            Company Details
          </Typography>
          <Button variant='primary'>Edit</Button>
        </div>

        <div className={styles.info}>
          <OrganizationInfo />
          <OrganizationInfo />
          <OrganizationInfo />
        </div>
      </div>
    </div>
  );
};
