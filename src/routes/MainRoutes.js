import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Candidate from 'pages/candidate/candidate';
import CandidateProfile from 'pages/candidate/candidateProfile';
import AddCandidate from 'pages/candidate/addCandidate';
import Billing from 'pages/Billing/billing';
import Verifiedpan from 'pages/VerfyUser/verifiedpan';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Package = Loadable(lazy(() => import('pages/packages/package')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Panverify = Loadable(lazy(() => import('pages/VerfyUser/panverify')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
    ,{
      path: 'candidate',
      element: <Candidate/>
    }
    ,{
      path: 'candidateProfile',
      element: <CandidateProfile/>
    },
    {
      path: 'addCandidate',
      element: <AddCandidate/>
    },
    {
      path: 'billing',
      element: <Billing/>
    }


    ,{
      path:'package',
      element:<Package />
    }
    ,{
      path:'panverify',
      element:<Panverify />
    }
    ,{
      path:'verifiedpan',
      element:<Verifiedpan />
    }
  ]
};

export default MainRoutes;
