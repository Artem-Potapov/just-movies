import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FavoriteCard from "../components/molecules/FavoriteCard";
import { useNavigate } from "react-router";

function Favorites(props) {
    const navigate = useNavigate();

    const favoritesArray = props?.data?.map((fav) => {
        return (
            <FavoriteCard
                key={fav.id}
                title={fav.attributes.movieTitle}
                description={fav.attributes.movieDesc}
                time={fav.attributes.movieTime}
                price={fav.attributes.moviePrice}
                img={fav?.attributes?.movieImg?.data?.attributes.url}
            />
        );
    });

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                minHeight: "100vh",
                background:
                    "linear-gradient(45deg, rgba(0, 0, 0, 0.86) 1.30%, #8F1414 59.38%)",
            }}
        >
            <Box
                sx={{
                    marginTop: "5rem",
                }}
                className="container"
            >
                {favoritesArray.length === 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            height: "80vh",
                        }}
                    >
                        <Typography
                            component="h5"
                            sx={{ fontSize: "24px", textAlign: "center" }}
                        >
                            У вас нет фильмов в избранных. Здесь вы сможете
                            перейти на страницу со всеми любимыми эпизодами.
                        </Typography>
                        <Button
                            sx={{
                                width: "100%",
                                maxWidth: "350px",
                                marginTop: "1.25rem",
                                fontWeight: "600",
                                fontSize: "18px",
                                textTransform: "initial",
                                background:
                                    "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);",
                                boxShadow: "0px 4px 8px 0px #A71A1A",
                            }}
                            variant="contained"
                            onClick={() => navigate("/movies")}
                        >
                            Смотреть сейчас
                        </Button>
                    </Box>
                )}
                {props?.loading && (
                    <Typography component="h1" sx={{ color: "white" }}>
                        loading...
                    </Typography>
                )}
                {favoritesArray}
            </Box>
        </Box>
    );
}

export default Favorites;
