import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <Box component="div" sx={{}}>
            <Typography component="h1" sx={{fontSize: '25px', fontWeight: '700'}}>Logo</Typography>
            <Box component="div">
                <Link>tt</Link>
                <Link>tt</Link>
                <Link>tt</Link>
                <Link>tt</Link>
            </Box>
        </Box>
            <Link to='/gggg'>to GGGG</Link>
            <Typography component="h1">Text</Typography>
            <Button
                sx={{ width: "200px", background: "black" }}
                variant="contained"
            >
                Click me
            </Button>
        </>
    );
}

export default Home;
