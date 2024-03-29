import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Console from "../../Assets/Console.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Land.css";

AOS.init();

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
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    console.log("hey", alert);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "maroon",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-land">
        <Grid item className="text-land">
          <h1> Get fast Information on New and trending Games</h1>
          <h4>
            Find the latest games, see the latest technology, Enjoy a wide range
            of information on your favourite gaming platforms, See the rating of
            new and up coming games. See what the gaming market has to offer all
            this and more at Gamezone
          </h4>
        </Grid>
        <Grid item>
       <Boot src={Console} />
        </Grid>
      </Grid>
    </Box>
  );
}
