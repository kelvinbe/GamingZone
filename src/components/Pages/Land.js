import React from "react";
import Grid from "@mui/material/Grid";
import Console from "../../Assets/Console.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";

import "./Land.css";

const Boot = styled("img")(({ theme }) => ({
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

export default function Land() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#9c2a2a",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-land">
        <Grid item className="text-land">
          <h1> Get New and trending Games</h1>
          <h4>
            Netlify unites an entire ecosystem of modern tools and services into
            a single, simple workflow for building high performance sites and
            apps. Get started for free Questions? Talk to an expert
          </h4>
        </Grid>
        <Grid item>
          <Boot src={Console} />
        </Grid>
      </Grid>
    </Box>
  );
}
