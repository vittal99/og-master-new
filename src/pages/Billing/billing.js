import React,{useState} from 'react';
import {  Table, TableBody, TableCell,  TableHead, TableRow,  Menu, MenuItem,Typography} from '@mui/material';
 
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '../../../node_modules/@mui/material/index';
import AuthWrapper from 'pages/authentication/AuthWrapper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const Data = [
  {id:"1",
      Subscribustion_type:"Full-Package",
      Subscription_start:"01-01-2024",
      Subscription_end:"01-02-2024",
      Usage_limit:"5",
      Usage_count:"10",
      Api_access_key:"",
      Status:"Active"
    },
    {id:"2",
      Subscribustion_type:"Full-Package",
      Subscription_start:"01-01-2024",
      Subscription_end:"01-02-2024",
      Usage_limit:"5",
      Usage_count:"10",
      Api_access_key:"",
      Status:"Active"
    },
   
    {id:"3",
      Subscribustion_type:"Full-Package",
      Subscription_start:"01-01-2024",
      Subscription_end:"01-02-2024",
      Usage_limit:"5",
      Usage_count:"10",
      Api_access_key:"",
      Status:"Active"
    },
    {id:"4",
    Subscribustion_type:"Full-Package",
    Subscription_start:"01-01-2024",
    Subscription_end:"01-02-2024",
    Usage_limit:"5",
    Usage_count:"10",
    Api_access_key:"",
    Status:"Active"
  },
  {id:"5",
      Subscribustion_type:"Full-Package",
      Subscription_start:"01-01-2024",
      Subscription_end:"01-02-2024",
      Usage_limit:"5",
      Usage_count:"10",
      Api_access_key:"",
      Status:"Active"
    },
    {id:"6",
    Subscribustion_type:"Full-Package",
    Subscription_start:"01-01-2024",
    Subscription_end:"01-02-2024",
    Usage_limit:"5",
    Usage_count:"10",
    Api_access_key:"",
    Status:"Active"
  },
];

const Billing = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AuthWrapper  cardWidth={{ xs: 400, lg: 1200 }} >
        <Table>
          <TableHead>
            <TableRow  gaping={5}>
              <TableCell>SN</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>Subscription Start</TableCell>
              <TableCell>Subscription End</TableCell>
              <TableCell>Usage Limit</TableCell>
              <TableCell>Usage Count</TableCell>
              <TableCell>API Access Key</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.Subscribustion_type}</TableCell>
                <TableCell>{item.Subscription_start}</TableCell>
                <TableCell>{item.Subscription_end}</TableCell>
                <TableCell sx={{ paddingLeft: 5 }}>{item.Usage_limit}</TableCell>
                <TableCell sx={{ paddingLeft: 5 }}>{item.Usage_count}</TableCell>
                <TableCell sx={{ paddingLeft: 5 }}>
                    <ContentCopyIcon/>
                </TableCell>
                <TableCell >{item.Status}</TableCell>
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

  );
};

 export default Billing;


