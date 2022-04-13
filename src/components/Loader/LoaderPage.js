import { Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Ninja from "../../Assets/Cover.svg";
import Loader from "./Loader";

const Soot = styled("img")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
 
  },
  [theme.breakpoints.up("md")]: {
  },
  [theme.breakpoints.up("lg")]: {
 
  },
}));

const LoaderPage = () => {
  return (
    <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid item style={{overflow: "hidden", overflowX: 'hidden', overflowY: 'hidden'}}>
        <Soot src={Ninja}  />
      </Grid>

      <Grid item className="loader-fit">
        <Loader />
      </Grid>
    </Grid>
  );
}

export default LoaderPage
