import { Grid, Stack} from '@mui/material';
import React, { useState} from 'react';

// project import
import ComponentSkeleton from './ComponentSkeleton';
// import MainCard from 'components/MainCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //
function createData(
  id,
  name,
  role,
  date
) {
  return { id,name, role,date};
}


// ==============================|| COMPONENTS - TYPOGRAPHY ||===========

const rows = [
  createData(1,'raju','HR','12-05-2023'),
  createData(2,'raju','HR','12-05-2023'),
  createData(3,'raju','HR','12-05-2023'),
  createData(4,'raju','HR','12-05-2023'),
  createData(5,'raju','HR','12-05-2023'),
  createData(6,'raju','HR','12-05-2023'),
  createData(7,'raju','HR','12-05-2023'),
  createData(8,'raju','HR','12-05-2023'),
  createData(9,'raju','HR','12-05-2023'),
  createData(10,'raju','HR','12-05-2023'),
  createData(11,'raju','HR','12-05-2023'),
  createData(12,'raju','HR','12-05-2023'),
  createData(13,'raju','HR','12-05-2023'),
  createData(14,'raju','HR','12-05-2023'),
  createData(15,'raju','HR','12-05-2023'),
  createData(16,'raju','HR','12-05-2023'),
  createData(17,'raju','HR','12-05-2023'),
  createData(18,'raju','HR','12-05-2023'),
  createData(19,'raju','HR','12-05-2023'),
  createData(20,'raju','HR','12-05-2023'),
  createData(21,'raju','HR','12-05-2023'),
  createData(22,'raju','HR','12-05-2023'),
  createData(23,'raju','HR','12-05-2023'),
  createData(24,'raju','HR','12-05-2023'),
  createData(25,'raju','HR','12-05-2023'),
  createData(26,'raju','HR','12-05-2023'),
  createData(27,'raju','HR','12-05-2023'),
  createData(28,'raju','HR','12-05-2023'),
  createData(29,'raju','HR','12-05-2023'),
  createData(30,'raju','HR','12-05-2023'),
  createData(31,'raju','HR','12-05-2023'),
  createData(32,'raju','HR','12-05-2023'),
  createData(33,'raju','HR','12-05-2023'),
  createData(34,'raju','HR','12-05-2023'),
  createData(35,'raju','HR','12-05-2023'),
];
const pageSize = 10;

const ComponentTypography = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cPage, setCPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(page => page + 1);
    setCPage(page => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(page => page - 1);
    setCPage(page => page - 1);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentSubset = rows.slice(startIndex, endIndex);

  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={16} sm={10} md={8}>
          
          <TableContainer component={Paper}>
            <Table size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentSubset.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.role}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={goToPreviousPage} disabled={currentPage === 0}>
                Prev..
              </Button>
              <div>
                {cPage}
              </div>
              <Button variant="contained" onClick={goToNextPage} disabled={endIndex >= rows.length}>
                Next
              </Button>
            </Stack>
          </TableContainer>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
        <Button variant="contained">Contained</Button>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // sx={{ height: 50}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </Box>
     
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

export default ComponentTypography;
