import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Candidate from 'pages/candidate/candidate';
import CandidateProfile from 'pages/candidate/candidateProfile';
import AddCandidate from 'pages/candidate/addCandidate';
import Billing from 'pages/Billing/billing';
import Verifiedpan from 'pages/VerfyUser/verifiedpan';
import Manageuser from 'pages/User/manageuser';
import { useMemo,useState} from "react";
import {Navigate} from "react-router-dom"

import CountryDropdown from 'pages/authentication/auth-forms/CountryDropdown';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities

const Package = Loadable(lazy(() => import('pages/packages/package')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Panverify = Loadable(lazy(() => import('pages/VerfyUser/panverify')));


// ==============================|| MAIN ROUTING ||============================== //

const PrivateRoute = ({ path, element  }) => {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  useMemo(()=>{
    setIsAuthenticated(sessionStorage.getItem("userData"))
  },[])
    return(
      <>
      {
     isAuthenticated ? (
     element
    ) : (
      <Navigate to="/"  replace state={{ from: path }}/>
    )
 }
    </>
    )
  };
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute path="/dashboard/default" element={<DashboardDefault />} />
        }
      ]
    },
    {
      path: 'sample-page',
      element:  {
        path: 'default',
        element: <PrivateRoute path="/sample-page" element={<SamplePage />} />
      }
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'default',
      element: <PrivateRoute path="/manageuser" element={<Manageuser />} />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
    ,{
      path: 'default',
      element:<PrivateRoute path="/candidate" element={ <Candidate/>} />
    }
    ,{
      path: 'default',
      element: <PrivateRoute path="/candidateProfile" element={ <CandidateProfile/>} />
    },
    {
      path: 'default',
      element: <PrivateRoute path="/addCandidate" element={<AddCandidate/>} />
    },
    {
      path: 'default',
      element:<PrivateRoute path="/billing" element={ <Billing/>} />
    }


    ,{
      path:'default',
      element: <PrivateRoute path="/package" element={<Package />} />
    }
    ,{
      path:'default',
      title: 'Panverify',
      element:<PrivateRoute path="/panverify" element={<Panverify />} />
    }
    ,{
      path:'default',
      element:<PrivateRoute path="/verifiedpan" element={<Verifiedpan />} />,
      title: 'Panverify',
    }
    ,{
      path:'default',
      element:<PrivateRoute path="/CountryDropdown" element={<CountryDropdown/>} />
    }
  ]
};

export default MainRoutes;
export { PrivateRoute };
