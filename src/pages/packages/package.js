import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import Button from '@mui/material/Button';

const Package = () => {
  const pack = [
    {
      name: 'Default',
      price: 0,
      storage: 70,
      users: 10,
      supports: 'Email',
    },
    {
      name: 'Starter',
      price: 500,
      storage: 70,
      users: 10,
      supports: 'Email',
    },
    {
      name: 'Medium',
      price: 1000,
      storage: 70,
      users: 10,
      supports: 'Email',
    },
    {
      name: 'Larger',
      price: 2000,
      storage: 70,
      users: 10,
      supports: 'Email',
    },
    // Add more items...
  ];

  return (
    <Grid container spacing={5}>
      {pack.map((item) => (
        <Grid item key={item.name} xs={10} sm={5} md={3}>
          <Box
            sx={{
              width: 250,
              height: 400,
              marginRight: 1,
              borderRadius: 2,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 4,
              paddingRight: 4,
              backgroundColor: '#bbdefb',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
              // color: '#000000',
              '&:hover': {
                backgroundColor: '#01579b',
                opacity: [0.9, 0.8, 0.7],
                color: '#ffffff',
              },
            }}
          >
            <Stack sx={{ textAlign: 'center' }}>
              <Typography variant="h3">{item.name}</Typography>
              <Typography variant="h5" sx={{ marginTop: 2 ,color:'#651fff'}}>
                ${item.price}/Yearly
              </Typography>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                {item.storage}MB Storage
              </Typography>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                {item.users} Users
              </Typography>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                {item.supports}
              </Typography>
              <Button variant="contained" width="10" sx={{ marginTop: 3 }}>
                Upgrade Now
              </Button>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Package;
