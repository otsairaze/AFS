import { Typography } from '@/components/shared/Typography/Typography';
import { Button } from '@/components/ui';
import styles from './OrganizationCard.module.scss';
import { observer } from 'mobx-react-lite';
import { OrganizationInfo } from './components';

interface OrganizationCardProps {
  cards: any;
}

export const OrganizationCard = observer(({ cards }: OrganizationCardProps) => {
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
          {cards.cards.map((card) => (
            <OrganizationInfo key={card.name} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
});
