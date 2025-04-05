import { Organization, Typography } from '@/components';
import { OutletLayout } from '@/layouts/OutletLayout/OutletLayout';

const OrganizationPage = () => {
  return (
    <OutletLayout
      renderHeader={() => (
        <Typography variant='title32_semibold' tag='h2'>
          Eternal Rest Funeral Home
        </Typography>
      )}
    >
      <Organization />
    </OutletLayout>
  );
};

export default OrganizationPage;
