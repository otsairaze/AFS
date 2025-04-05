import { AsideLayout } from '../../../../../layouts';
import { Typography } from '../../../Typography/Typography';

export const Aside = () => {
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
      <div>test</div>
    </AsideLayout>
  );
};
