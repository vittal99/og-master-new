import { Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

const Panverify = () => {
  return (
    <Grid container spacing={3} minHeight="100vh">
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
    </Grid>
  );
};

export default Panverify;
