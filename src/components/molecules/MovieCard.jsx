import { Box, Typography } from "@mui/material";
import React from "react";


function MovieCard(props)
{
    return(
        <Box sx={{width: "1070px", height: "200px", background: "#FFF"}}>
            <Typography sx={{color: "#0F0F0F",}} component={"h2"}>{props.title}</Typography>
            <Typography sx={{color: "#0F0F0F",}} component={"p"}>{props.description}</Typography>
            <Typography sx={{color: "#0F0F0F",}} component={"p"}>{props.time}</Typography>
            <Typography sx={{color: "#0F0F0F",}} component={"p"}>Цена: {props.price}</Typography>
        </Box>
    )
}

export default MovieCard;