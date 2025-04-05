import {
  ClientsSvg,
  ContractSvg,
  LogoSvg,
  LogoutSvg,
  ProcessManagerSvg,
  SearchSvg,
  SettingsSvg
} from '@/assets/svg';
import { NavItem } from '@/types/NavItemTypes';

export const useNavigation = () => {
  const items: NavItem[] = [
    {
      svg: LogoSvg,
      path: ['/']
    },
    {
      svg: ProcessManagerSvg,
      path: '/process-manager',
      title: 'Process Manager',

      subItems: [
        {
          svg: ProcessManagerSvg,
          title: 'Organizations',
          path: '/organization'
        },
        {
          svg: ContractSvg,
          title: 'Contractors',
          path: '/contract'
        },
        {
          svg: ClientsSvg,
          title: 'Clients',
          path: '/clients'
        }
      ]
    },
    {
      svg: SearchSvg,
      path: '/search'
    },
    {
      svg: SettingsSvg,
      path: '/settings'
    },
    {
      svg: LogoutSvg,
      path: '/logout'
    }
  ];

  return { items };
};
