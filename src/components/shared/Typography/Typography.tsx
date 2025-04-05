import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import styles from './Typography.module.scss';

type TagVariant = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyVariant = 'title20_semibold' | 'paragraph16_regular';

type TypographyProps<T extends TagVariant> = ComponentProps<T> & {
  tag: TagVariant;
  children: React.ReactNode;
  variant: TypographyVariant;
  color?: TypographyVariantColor;
  className?: string;
};

type TypographyVariantColor = 'primary' | 'subtitle' | 'secondary';

export const Typography = <T extends TagVariant = 'p'>({
  tag,
  children,
  variant,
  className,
  color = 'primary',
  ...props
}: TypographyProps<T>) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], styles[color], className)} {...props}>
      {children}
    </Component>
  );
};
