
import React from 'react';
import { TextField, TableCell, Select, MenuItem,  Typography,Stack } from '@mui/material';
import AuthWrapper from 'pages/authentication/AuthWrapper';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';

function AddCandidate() {
  return (

    <AuthWrapper sx={{ width: '1000px' }}>
    <Stack gap={2}>
        <Stack direction="row" spacing={10}>
        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Name</Typography>
            </Stack>
            <Stack>
            <TextField variant="outlined"  sx={{ width: "250px" }} />
            </Stack>
        </Stack>
        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Email</Typography>
            </Stack>
            <Stack>
            <TextField variant="outlined"  sx={{ width: "250px" }} />
        </Stack>
        </Stack>
        <Stack spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Phone</Typography>
            </Stack>
            <Stack>
            <TextField variant="outlined"  sx={{ width: "250px" }} />
            </Stack>
        </Stack>
        </Stack>


        <Stack direction="row" spacing={10}>
        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Phone</Typography>
            </Stack>
            <Stack>
            <TextField variant="outlined"  sx={{ width: "250px" }} />
            </Stack>
        </Stack>
        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Score</Typography>
            </Stack>
            <Stack>
            <TextField variant="outlined"  sx={{ width: "250px" }} />
            </Stack>
        </Stack>

        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Status</Typography>
            </Stack>
            <Stack>
            <TableCell >
                <Select labelId="candidate-status-label" defaultValue="Select">
                <MenuItem value="Ghosted">Ghosted</MenuItem>
                <MenuItem value="In-Process">In Process</MenuItem>
                <MenuItem value="Accepted">Accepted</MenuItem>
                </Select>  
            </TableCell>
            </Stack>
        </Stack>
        </Stack>
        <Stack spacing={10}>
        <Stack  spacing={1}>
            <Stack>
            <Typography variant="h6">Candidate Status</Typography>
            </Stack>
            <Stack>
            <TableCell >
                <Select labelId="candidate-status-label" defaultValue="Select">
                <MenuItem value="Ghosted">Ghosted</MenuItem>
                <MenuItem value="In-Process">In Process</MenuItem>
                <MenuItem value="Accepted">Accepted</MenuItem>
                </Select>  
            </TableCell>
            </Stack>
        </Stack>
        </Stack>
    </Stack>
    </AuthWrapper>

  );
}

export default AddCandidate;
