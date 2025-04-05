import clsx from 'clsx';
import styles from './Button.module.scss';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
  variant: ButtonVariants;
}

type ButtonVariants = 'primary' | 'outlined' | 'none' | 'navigation';

export const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
