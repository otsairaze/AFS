import styles from './AsideLayout.module.scss';

interface AsideLayoutProps {
  children: React.ReactNode;
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  renderSubHeader?: () => React.ReactNode;
}

export const AsideLayout = ({
  children,
  renderFooter,
  renderHeader,
  renderSubHeader
}: AsideLayoutProps) => {
  return (
    <div className={styles.aside}>
      <div className={styles.content}>
        <div>
          {renderHeader && renderHeader()}
          {renderSubHeader && renderSubHeader()}
        </div>
        {children}
      </div>
      <div>{renderFooter && renderFooter()}</div>
    </div>
  );
};
