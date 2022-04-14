import React from "react";
import Grid from "@mui/material/Grid";
import Spidy from "../../Assets/eyes.jpg";
import Sink from "../../Assets/infernal.png";
import Face from "../../Assets/kratos.jpg";

import Box from "@mui/material/Box";

import "./Show.css";
import { Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: Sink,
  },
  {
    url: Spidy,
  },
  {
    url: Face,
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: 480,
                borderRadius: 20,
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default function Show() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "black",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container className="container-show">
        <Grid item className="img-game">
          <Typography style={{ color: "white" }}>
            <h1> Get New and trending</h1>
            <h4>Based on player counts and release date</h4>
          </Typography>
        </Grid>
        <Grid item>{Slideshow()}</Grid>
      </Grid>
    </Box>
  );
}
