
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthWrapper from 'pages/authentication/AuthWrapper';
import { Stack } from '../../../node_modules/@mui/material/index';


const Panverify = () => {
  return (

    <AuthWrapper width={300} cardWidth={{ xs: 400, lg: 1200 }} justifyContent='center' alignItems='center'>
      <Stack gap={1}>
            <TextField required id="outlined-required" label="Email" placeholder="Email" />
            <TextField required id="outlined-required" label="Pan" placeholder="Pan Card Number" />
            <div>
            <Link to="/Verifiedpan" variant="body2" style={{ textDecoration: 'none' }}>
                <Button size="small">Verify</Button>
              </Link>
              <Button size="small">Cancel</Button>
            </div>
      </Stack>


      </AuthWrapper>

    /* <Grid container spacing={3} minHeight="100vh">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Verification" />
            <CardContent>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField required id="outlined-required" label="Email" placeholder="Email" />
                  <TextField required id="outlined-required" label="Pan" placeholder="Pan Card Number" />
                </div>
              </Box>
            </CardContent>
            <CardActions>
              <Link to="/Verifiedpan" variant="body2" style={{ textDecoration: 'none' }}>
                <Button size="small">Verify</Button>
              </Link>
              <Button size="small">Cancel</Button>
            </CardActions>
          </Card>
        </Stack>
      </Grid>
    </Grid> */
  );
};

export default Panverify;
