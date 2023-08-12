import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "../components/molecules/MovieCard";

function Movies(props) {
    const moviesArray = props.data.map((movie) => {
        console.log(movie)
        return (
            <MovieCard
                title={movie.attributes.movieTitle}
                description={movie.attributes.movieDesc}
                time={movie.attributes.movieTime}
                price={movie.attributes.moviePrice}
            />
        );
    });

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
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
                {moviesArray}
            </Box>
        </Box>
    );
}

export default Movies;
