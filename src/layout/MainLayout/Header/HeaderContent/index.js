



import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    console.log('Component mounted or location changed.');
    // Perform side effects or update component state
  }, [location]);

  const pageTitleMappings = {
     '/dashboard/default': 'Dashboard',
    '/manageuser':'Manage User',
    '/candidate':'Candidates',
    '/candidateProfile':'Profile',
    '/addCandidate':'AddCandidates',
    '/billing':'Billing',
    '/panverify':'Pan Verify',
    '/Verifiedpan':'Pan Verification'



    // Add more mappings as needed
  };

  const getPageTitle = () => {
    const path = location.pathname;
    console.log("hi",path);
    return pageTitleMappings[path] || 'Dashboard';
  };

  return (
    <>
     

      
      <h3 style={{marginLeft:10,fontSize:18}}  >{getPageTitle()}</h3>

      <Box sx={{ marginLeft: 'auto' }}>
        <Notification />
      </Box>

      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
     
    </>
  );
};

export default HeaderContent;
