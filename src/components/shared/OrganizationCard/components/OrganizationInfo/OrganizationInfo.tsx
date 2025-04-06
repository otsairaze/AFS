import { Typography } from '@/components/shared/Typography/Typography';
import styles from './OrganizationInfo.module.scss';

export const OrganizationInfo = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='paragraph16_regular' tag='p'>
        {data.name}
      </Typography>
      <Typography variant='paragraph16_regular' tag='p'>
        {data.milk}
      </Typography>
    </div>
  );
};
