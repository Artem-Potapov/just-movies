import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Box component="div" className="container">
            <Box component="div" sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography component="h1">logo</Typography>
                <Box component="div">
                    <Link onClick={() => navigate('/gggg')}>главная</Link>
                    <Link onClick={() => navigate('/gggg')}>фильмы</Link>
                    <Link onClick={() => navigate('/gggg')}>избранное</Link>
                    <Link onClick={() => navigate('/gggg')}>контакты</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
