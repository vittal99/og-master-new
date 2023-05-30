import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
// import AuthCard from './AuthCard';

// ================================|| LOGIN ||================================ //

const Login = () => (
  <AuthWrapper cardWidth={{ xs: 400, lg: 475 }} justifyContent='center' alignItems='center'>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Login</Typography>
          <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Don&apos;t have an account?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
      {/* <AuthCard cardWidth={{ xs: 400, lg: 475 }} /> */}
        <AuthLogin />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
