import { ComponentProps } from 'react';

export interface NavItem {
  svg: React.ComponentType<ComponentProps<'svg'>>;
  path: string;
  title?: string;
  subItems?: NavItem[];
}
