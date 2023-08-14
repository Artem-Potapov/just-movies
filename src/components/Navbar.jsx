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
                paddingTop: "1rem",
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
                        onClick={() => navigate("/")}
                    >
                        главная
                    </Link>
                    <Link
                        sx={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "'Rubik', sans-serif;",
                            textDecoration: "none",
                        }}
                        onClick={() => navigate("/movies")}
                    >
                        фильмы
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
                        избранное
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
                        контакты
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
