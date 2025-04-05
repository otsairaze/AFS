import {
  ClientsSvg,
  ContractSvg,
  LogoSvg,
  LogoutSvg,
  ProcessManagerSvg,
  SearchSvg,
  SettingsSvg
} from '../../../../../assets/svg';

interface NavItem {
  svg: React.ElementType;
  path: string[] | string;
  subItems?: NavItem[];
}

export const useNavigation = () => {
  const items: NavItem[] = [
    {
      svg: LogoSvg,
      path: ['/']
    },
    {
      svg: ProcessManagerSvg,
      path: '/process-manager',
      subItems: [
        {
          svg: ProcessManagerSvg,
          path: '/organization'
        },
        {
          svg: ContractSvg,
          path: '/contract'
        },
        {
          svg: ClientsSvg,
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
