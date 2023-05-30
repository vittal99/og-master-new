import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';
// import Logo from 'images/ogLogo.png';
// import AuthFooter from 'components/cards/AuthFooter';


const AuthWrapper = ({ children,  cardWidth,justifyContent,alignItems}) => (
  <Box>
  
    {/* <AuthBackground /> */}
    <Grid
      container
      direction="column"
      justifyContent="center"
      
    >
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
      {/* <img
  src={Logo}
  alt="Company Logo"
  style={{ width: '100px' }}
/> */}
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent={justifyContent}
          alignItems={alignItems}
          // sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item >
            <AuthCard width={cardWidth}>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        {/* <AuthFooter /> */}
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object, 
  cardWidth: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  // Add sx prop type
};

export default AuthWrapper;
