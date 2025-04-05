import { Button, Typography } from '@/components';
import styles from './SubItemButton.module.scss';
import { NavItem } from '@/types/NavItemTypes';
import { SvgProvider } from '@/assets/svg/SvgProvider';

interface SubItemButtonProps {
  subItem: NavItem;
}

export const SubItemButton = ({ subItem }: SubItemButtonProps) => (
  <Button className={styles.btn} variant='border'>
    {subItem.svg && <SvgProvider variant='svg-secondary' SvgComponent={subItem.svg} />}
    <Typography variant='paragraph16_regular' color='primary' tag='p'>
      {subItem.title}
    </Typography>
  </Button>
);
