import { Grid } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const LoaderPage = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#a20606",
      }}
    >
      <Grid item className="loader-fit">
        <Loader />
      </Grid>
    </Grid>
  );
};

export default LoaderPage;
