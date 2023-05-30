

import * as React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import RatingMeter from 'components/progressBar/circularProgress';
import AuthWrapper from 'pages/authentication/AuthWrapper';
// import { Margin } from '../../../node_modules/@mui/icons-material/index';

function CandidateProfile() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        <AuthWrapper cardWidth={{ height: "100px", width: "300px" }}>
          <Stack direction="row" spacing={3}>
            <Stack>
              <PersonIcon fontSize="large" />
            </Stack>
            <Stack>
              <Typography variant="h6">Software Developer</Typography>
              <Typography variant="h6">Sumeru Digital Solution</Typography>
            </Stack>
          </Stack>
        </AuthWrapper>
        <AuthWrapper cardWidth={{ height: "100px", width: "300px" }}>
          <Stack direction="row" spacing={3}>
            <Stack>
              <PersonIcon fontSize="large" />
            </Stack>
            <Stack>
              <Typography variant="h6">Vijay</Typography>
              <Typography variant="h6">Vijaybc@gmail.com</Typography>
            </Stack>
          </Stack>
        </AuthWrapper>
        <Stack style={{ position: 'absolute', right: 0 }}>
          <RatingMeter />
        </Stack>
      </Stack>
      
     <Stack direction="row" spacing={1}>
      <Stack >
        <AuthWrapper
          cardWidth={{}}
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          <Stack direction="column" spacing={8}>
            <Stack direction="row" spacing={8}>
              <Typography variant="subtitle1">Candidate Name:</Typography>
              <Typography variant="body1">Vijay</Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Typography variant="subtitle1">Candidate Email:</Typography>
              <Typography variant="body1">Vijay@gmail.com</Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Typography variant="subtitle1">Candidate Phone:</Typography>
              <Typography variant="body1">9876543210</Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Typography variant="subtitle1">Candidate Status:</Typography>
              <Typography variant="body1">Selected</Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Typography variant="subtitle1">Candidate Score:</Typography>
              <Typography variant="body1">80%</Typography>
            </Stack>
          </Stack>
        </AuthWrapper>
      </Stack>

      <Stack  style={{ position: 'absolute', right: 0,marginTop:100 }}>
        <AuthWrapper
          cardWidth={{ xs: 400, lg: 475 }}
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
           
          }}
         
        >
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1">Candidate Name:</Typography>
              <Typography variant="body1">Vijay</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1">Candidate Email:</Typography>
              <Typography variant="body1">Vijay@gmail.com</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1">Candidate Phone:</Typography>
              <Typography variant="body1">9876543210</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1">Candidate Status:</Typography>
              <Typography variant="body1">Selected</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1">Candidate Score:</Typography>
              <Typography variant="body1">80%</Typography>
            </Stack>
          </Stack>
        </AuthWrapper>
      </Stack>

      </Stack>
    </Stack>
  );
}

export default CandidateProfile;