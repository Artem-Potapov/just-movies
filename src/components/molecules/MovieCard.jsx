import { Box, Button, Typography } from "@mui/material";
import React from "react";

function MovieCard(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        background: "#F0F0F0",
        margin: "0 20px",
        padding: "5px 10px",
        border: "groove 0.7em red;",
        borderRadius: "1em",
      }}
    >
      <Typography sx={{ color: "#FA0DD8" }} component={"p"}>
        Тут была картинка :\
      </Typography>
      <Typography sx={{ color: "#0F0F0F", fontSize: "20px" }} component={"h2"}>
        {props.title}
      </Typography>
      <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
        {props.description}
      </Typography>
      <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
        {props.time}
      </Typography>
      <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
        Цена: {props.price}
      </Typography>
      <Button>Смотреть сейчас</Button>
      <Button>В избранное</Button>
    </Box>
  );
}

export default MovieCard;
