import { SearchSvg } from '@/assets/svg';
import { Typography } from '@/components';
import { InputCompound } from '@/components/ui/Input/Input';
import { OutletLayout } from '@/layouts/OutletLayout/OutletLayout';
import styles from './SearchPage.module.scss';

export const SearchPage = () => {
  return (
    <OutletLayout
      renderHeader={() => (
        <Typography variant='title32_semibold' tag='h2' className={styles.title}>
          Search
        </Typography>
      )}
    >
      <InputCompound className={styles.input}>
        <InputCompound.SvgInner>
          <SearchSvg />
        </InputCompound.SvgInner>
        <InputCompound.Title id='search' title='Search'>
          Search
        </InputCompound.Title>
        <InputCompound.Input variant='primary' />
      </InputCompound>
    </OutletLayout>
  );
};
