import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'

const Loading = () => {
    return (
        <Stack sx={{color: 'olive'}} style={{display: "flex", justifyContent: 'center', padding: '20%'}} spacing={4}
               direction="row">
            <CircularProgress color="inherit"/>
        </Stack>
    );
}
export default Loading
