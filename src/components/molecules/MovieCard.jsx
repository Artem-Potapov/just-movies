import { Box, Button, Typography } from "@mui/material";
import React from "react";

function MovieCard(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        background: "#F0F0F0",
        margin: "20px",
        padding: "5px 10px",
        border: "groove 0.7em red;",
        borderRadius: "1em",
        display: "flex",    
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{height: "100%", width: "200px"}}>
        <Typography sx={{ color: "#FA0DD8" }} component={"p"}>
          Тут была картинка :\
        </Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", width: "500px"}}>
        <Typography
          sx={{ color: "#0F0F0F", fontSize: "20px", marginBottom: "10px", }}
          component={"h2"}
        >
          {props.title}
        </Typography>

        <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
          {props.description}
        </Typography>
        {/* <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
          {props.time}
        </Typography>
        <Typography sx={{ color: "#0F0F0F" }} component={"p"}>
          Цена: {props.price}
        </Typography> */}
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", maxWidth: "50%", }}>
        <Button variant="contained" sx={{marginBottom:"40px", background: "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);"}}>Смотреть сейчас</Button>
        <Button variant="contained" sx={{marginBottom:"40px", background: "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);"}} >В избранное</Button>
      </Box>
    </Box>
  );
}

export default MovieCard;
