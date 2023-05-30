// import '../css/candidate.css';
import React,{useState} from 'react';
import { Button, Table, TableBody, TableCell,  TableHead, TableRow,  Menu, MenuItem,Typography} from '@mui/material';
 
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '../../../node_modules/@mui/material/index';
import AuthWrapper from 'pages/authentication/AuthWrapper';



const Data = [
  {id:"1",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanil",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delate"
    },
    {id:"2",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanilf",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delete"
    },
    {id:"3",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanil",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delate"
    },
    {id:"4",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanil",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delete"
    },
    {id:"5",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanil",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delete"
    },
    {id:"6",
      Candiadate_Name:"anil",
      Candiadate_Email:"@hdhasvdanil",
      Status:"selected",
      check:"checked",
      ActiveStatus:"2days",
      Score:"25%",
      Action:"Delete"
    }
];

const Candidate = () => {

  // ... (same as before)

  // const [currentPage, setCurrentPage] = useState(1);
  // const recordPerPage = 2;
  // const lastIndex = currentPage * recordPerPage;
  // const firstIndex = lastIndex - recordPerPage;
  // const records = Data.slice(firstIndex, lastIndex);
  // setCurrentPage('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (


    <div className="App" style={{ marginInline: 40, marginTop: 20 }}>
      <div style={{ padding: 20 }}>
      <Link to="/AddCandidate">
        <Button variant="contained" color="error" style={{ marginRight: 20 }}>
          + Add Candidate
        </Button>
        </Link>
        <Button variant="outlined" color="secondary"  >
          + Bulk Import
        </Button >
      </div>
      <AuthWrapper  cardWidth={{ xs: 400, lg: 1200 }} >
      {/* <TableContainer component={Paper} style={{ marginTop: 20 }}> */}
        <Table>
          <TableHead>
            <TableRow  gaping={5}>
              <TableCell>SN</TableCell>
              <TableCell>Candiate name</TableCell>
              <TableCell>Candidate Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Check</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.Candiadate_Name}</TableCell>
                <TableCell>{item.Candiadate_Email}</TableCell>
                <TableCell>{item.Status}</TableCell>
                <TableCell>{item.check}</TableCell>
                <TableCell>{item.ActiveStatus}</TableCell>
                <TableCell>{item.Score}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon  onClick={handleClick} style={{ border: '1px solid black',borderRadius:3 }}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      {/* </TableContainer> */}

  <div>
   
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  PaperProps={{
    style: {
      maxHeight: '50%',
      width: '20ch',
    },
  }}
>
      <MenuItem onClick={handleClose}>
      <Link to="/CandidateProfile">
       <IconButton>
       <Stack direction="row" spacing={1} >
            <div style={{marginLeft:45}}>
            <VisibilityIcon />
            </div>
            <div>
              <Typography variant="h5">View</Typography>
            </div>
        </Stack>
       
        </IconButton>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
      <Link to="/AddCandidate">
         <IconButton> 
          <Stack direction="row" spacing={1} >
            <div style={{marginLeft:85}}>
               <EditIcon/>
            </div>
            <div > 
              <Typography variant="h5">Edit Profile</Typography>
            </div>
          </Stack>
         </IconButton>
      </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
      <IconButton>
       <Stack direction="row" spacing={1} >
            <div style={{marginLeft:45}}>
            <DeleteIcon />
            </div>
            <div>
              <Typography variant="h5">Delete</Typography>
            </div>
        </Stack>
      </IconButton>
      </MenuItem>
    </Menu>
   
  </div>
  </AuthWrapper>
    </div>
  );
};

 export default Candidate;



