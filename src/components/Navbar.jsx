import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                position: "absolute",
                left: "0",
                right: "0",
                padding: "1.5rem 0",
                zIndex: "9999",
            }}
            className="container"
        >
            <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Typography
                    sx={{ fontSize: "25px", fontWeight: "600", color: "#fff" }}
                    component="h1"
                >
                    Just Movies
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        display: "flex",
                        justifyContent: "space-between",
                        textDecoration: "none",
                    }}
                >
                    <Link
                        sx={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "'Rubik', sans-serif;",
                            textDecoration: "none",
                        }}
                        onClick={() => navigate("/home")}
                    >
                        Главная
                    </Link>
                    <Link
                        sx={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "'Rubik', sans-serif;",
                            textDecoration: "none",
                        }}
                        href="/movies"
                    >
                        Фильмы
                    </Link>
                    <Link
                        sx={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "'Rubik', sans-serif;",
                            textDecoration: "none",
                        }}
                        href="/favorites"
                    >
                        Избранное
                    </Link>
                    <Link
                        sx={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "'Rubik', sans-serif;",
                            textDecoration: "none",
                        }}
                        onClick={() => navigate("/")}
                    >
                        Контакты
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
