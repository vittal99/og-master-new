// // material-ui
// // import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
// import { Box, useMediaQuery } from '@mui/material';
// // import { GithubOutlined } from '@ant-design/icons';

// // project import
// // import Search from './Search';
// import Profile from './Profile';
// import Notification from './Notification';
// import MobileSection from './MobileSection';
// // import Typography from 'themes/overrides/Typography';

// // ==============================|| HEADER - CONTENT ||============================== //

// const HeaderContent = () => {
//   const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

//   return (
//     <>
//       {/* {!matchesXs && <Search />} */}
//       {/* {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />} */}
//       <h3>Dashboard</h3>

//       <Box sx={{ marginLeft: 'auto' }}> {/* Set marginLeft to 'auto' to align to the right */}
//         <Notification />
//       </Box>
    
      
//       {!matchesXs && <Profile />}
//       {matchesXs && <MobileSection />}
//     </>
//   );
// };

// export default HeaderContent;



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
    // '/dashboard': 'Dashboard',
    '/shadow': 'Shadow',
    '/color': 'Color',
    // Add more mappings as needed
  };

  const getPageTitle = () => {
    const path = location.pathname;
    return pageTitleMappings[path] || 'Default Header Name';
  };

  return (
    <>
      <h3>{getPageTitle()}</h3>

      <Box sx={{ marginLeft: 'auto' }}>
        <Notification />
      </Box>

      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
