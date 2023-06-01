// assets
import { DashboardOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }, {
      id: 'util-typography',
      title: 'Manage User',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Packages',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Candidates',
      type: 'item',
      url: '/candidate',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'Billing',
      title: 'Billing',
      type: 'item',
      url: '/billing',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'pan',
      title: 'Panverify',
      type: 'item',
      url: '/panverify',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'countrydropdown',
      title: 'Country',
      type: 'item',
      url: '/CountryDropdown',
      icon: icons.BarcodeOutlined
    },
   
  ]
};

export default dashboard;
