import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../Header/Header";

import "./End.css";
import { Typography } from "@mui/material";
import RatingsChart from "../Charts/RatingsChart";


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
          <h1>Number of games on various platforms</h1>
          <h4>Just how many are games are there on the various gaming platforms check out the graph below</h4>
        </Typography>
        <Grid item xs={12} className="graph">
          <RatingsChart />
        </Grid>
      </Grid>
    </Box>
  );
}
