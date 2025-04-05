import styles from './OutletLayout.module.scss';

interface OutletLayoutProps {
  renderHeader?: () => React.ReactNode;
  children: React.ReactNode;
}

export const OutletLayout = ({ children, renderHeader }: OutletLayoutProps) => {
  return (
    <div className={styles.outlet}>
      {renderHeader && renderHeader()}
      {children}
    </div>
  );
};
