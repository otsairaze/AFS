import { OrganizationCard, Typography } from '@/components';
import { OutletLayout } from '@/layouts';
import cards from '@/store/cards';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const OrganizationPage = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      await cards.fetchCards();
    };

    fetchData();
  }, []);

  return (
    <OutletLayout
      renderHeader={() => (
        <Typography variant='title32_semibold' tag='h2'>
          {cards.cards.length > 0 ? cards.cards[0].name : 'Loading...'}
        </Typography>
      )}
    >
      <OrganizationCard cards={cards} />
    </OutletLayout>
  );
});
