import { Box } from '@mui/material';
import { Typography } from '@material-ui/core';
export const   DataNotFound = ({ message }) => {
    return (
        <Box sx={{
            textAlign: 'center',
            padding: '1rem',
            color: 'red'
        }}>
            <Typography color={"error"} style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                textShadow: '0px 0px 20px'
            }}>
                {message}
            </Typography>
        </Box >
    );
  }