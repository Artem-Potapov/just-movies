import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import MovieCard from "../components/molecules/MovieCard";

function Movies(props) {
    const moviesArray = props?.data?.map((movie) => {
        return (
            <MovieCard
                key={movie.id}
                title={movie.attributes.movieTitle}
                description={movie.attributes.movieDesc}
                time={movie.attributes.movieTime}
                price={movie.attributes.moviePrice}
                img={movie?.attributes?.movieImg?.data}
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
                {props?.loading && (
                    <Typography component="h1" sx={{color: 'white'}}>loading...</Typography>
                )}
                {props.error && (<Typography component='p'>Возникла ошибка</Typography>)}
                   {moviesArray}
            </Box>
        </Box>
    );
}

export default Movies;
