import { Typography } from '@/components/shared/Typography/Typography';
import styles from './OrganizationInfo.module.scss';

export const OrganizationInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='paragraph16_regular' tag='p'>
        Agreement
      </Typography>
      <Typography variant='paragraph16_regular' tag='p'>
        1624/2-24 / 03.12.2024
      </Typography>
    </div>
  );
};
