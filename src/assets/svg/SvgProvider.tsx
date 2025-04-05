import { SvgColorTypes } from '@/types';
import clsx from 'clsx';
import { ComponentProps } from 'react';

interface SvgProviderProps extends ComponentProps<'svg'> {
  variant: SvgColorTypes;
  SvgComponent: React.ComponentType<ComponentProps<'svg'>>;
  className?: string;
}

export const SvgProvider = ({ variant, SvgComponent, className, ...props }: SvgProviderProps) => {
  return <SvgComponent className={clsx(variant, className)} {...props} />;
};
