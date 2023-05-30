import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';


export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
        >
            <Paper 
                sx={{
                    display: 'flex',
                    flexFlow: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "70vh",
                    height: "25vh"
                }} 
                elevation={1}
                variant="outlined"
            >
                <Typography variant="h2" component="h2">
                    Oops!
                </Typography>
                <Typography variant="h4" component="h2">
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')}
                >
                    Go back to home page
                </Button>
            </Paper>
        </Box>
    );
}