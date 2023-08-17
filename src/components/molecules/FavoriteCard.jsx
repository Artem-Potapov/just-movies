import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

function FavoriteCard(props) {
  return (
    <Box
      sx={{
        marginBottom: "1.5rem",
        padding: "20px",
        width: "100%",
        display: "flex",
        height: "250px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 2px 15px 0px #D2D1D1;",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxHeight: "220px", maxWidth:"230px", width: "230px"}}>
        <Box sx={{width: "230px", height:"220px", objectFit: "cover", borderRadius: "10px"}} component={"img"} src={`http://localhost:1337${props.img}`} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "20px",
            maxWidth: "400px",
            paddingBottom: "10px",
          }}
          component={"h2"}
        >
          {props.title}
        </Typography>

        <Typography sx={{ color: "#000" }} component={"p"}>
          {props.description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "300px",
            textTransform: "initial",
            filter: "drop-shadow(0px 4px 8px #A71A1A)",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);",
          }}
        >
          Смотреть сейчас
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "300px",
            textTransform: "initial",
            filter: "drop-shadow(0px 4px 8px #A71A1A)",
            background: "linear-gradient(90deg, #A71A1A 0%, #BB1616 100%);",
          }}
        >
          В избранное
        </Button>
      </Box>
    </Box>
  );
}

export default FavoriteCard;