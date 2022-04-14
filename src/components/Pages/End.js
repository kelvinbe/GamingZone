import React from "react";
import Grid from "@mui/material/Grid";
import Console from "../../Assets/Console.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";

import "./End.css";
import { Typography } from "@mui/material";

const Root = styled("img")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: 259,
  },

  [theme.breakpoints.up("md")]: {
    width: 360,
  },
  [theme.breakpoints.up("lg")]: {
    width: 533,
  },
}));

export default function End() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-landing">
        <Typography className="text-end">
          <h1>Rating on various platforms</h1>
          <h4>What are the ratings on the various gaming platforms check out the graph below</h4>
        </Typography>
        <Grid item xs={12}>
          <Root src={Console} className="img-game" />
        </Grid>
      </Grid>
    </Box>
  );
}
