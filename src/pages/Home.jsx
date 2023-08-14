import { Button, Typography, Box } from "@mui/material";
import React from "react";
import ironManImg from "../images/her-img.png";
function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
                background:
                    "linear-gradient(45deg, rgba(0, 0, 0, 0.86) 1.30%, #8F1414 59.38%)",
            }}
        >
            <Box className="container">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        padding: "40px",
                        width: "100%",
                        maxWidth: "1170px",
                        height: "70vh",
                        background: "rgba(255, 255, 255, 0.10)",
                        boxShadow:
                            "4px 4px 13px 0px rgba(255, 255, 255, 0.50);",
                        borderRadius: "10px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "45px",
                                fontWeight: "800",
                                maxWidth: "470px",
                            }}
                            component="h1"
                        >
                            Смотреть фильмы с{" "}
                            <Typography
                                component="h1"
                                sx={{
                                    color: "#CD0B0B",
                                    fontSize: "inherit",
                                    fontWeight: "inherit",
                                }}
                            >
                                Just Movies стало
                            </Typography>{" "}
                            <Typography
                                component="h1"
                                sx={{
                                    color: "#CD0B0B",
                                    fontSize: "inherit",
                                    fontWeight: "inherit",
                                }}
                            >
                                проще.
                            </Typography>{" "}
                        </Typography>
                        <Typography component="p" sx={{ maxWidth: "300px" }}>
                            Мы предлагаем лучший сервис по просмотру фильмов в
                            любой точке мира и в любое время
                        </Typography>
                        <Button
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                marginTop: "1.25rem",
                                fontWeight: "600",
                                fontSize: "18px",
                                textTransform: "initial",
                                background: "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);",
                                boxShadow: "0px 4px 8px 0px #A71A1A",
                            }}
                            variant="contained"
                            
                        >
                            Смотреть сейчас
                        </Button>
                    </Box>
                    <Box>
                        <Box component="img" src={ironManImg} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
