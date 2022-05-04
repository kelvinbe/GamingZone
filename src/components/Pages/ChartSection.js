import React, {useEffect, useRef, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../Header/Header";

import "./End.css";
import { Typography } from "@mui/material";
import RatingsChart from "../Charts/RatingsChart";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()

export default function ChartSection() {
  const myRef = useRef()
  const [chartIsVisible, setChartIsVisible] = useState()
  console.log('chartVisible', chartIsVisible)
  useEffect(() => { 

    const observer = new IntersectionObserver((entries) => {
      const entry= entries[0]
      setChartIsVisible(entry.isIntersecting)

  }, [])
  observer.observe(myRef.current)

  })
  
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
          <h1 data-aos="fade-left">Number of games on various platforms</h1>
          <h4 data-aos="fade-right">Just how many are games are there on the various gaming platforms check out the graph below</h4>
        </Typography>
        <Grid ref={myRef}  item xs={12} className="graph">
          <RatingsChart chartIsVisible={chartIsVisible} />
        </Grid>
      </Grid>
    </Box>
  );
}
