import React, {useRef, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../Header/Header";

import "./CountUp.css";
import { Typography } from "@mui/material";
import RatingsChart from "../Charts/RatingsChart";
import CountUp from 'react-countup';



export default function CountUpSection() {

    const myRef = useRef()
    const [countIsVisible, setCountIsVisible] = useState()
    console.log('visibility', countIsVisible)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry= entries[0]
            setCountIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "blue",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-landing">
        <Typography className="text-end-count">
          <h1>Top  Gaming Enigines Perfomance</h1>
          <h4>The top 3 gaming enignes as rated by game developers</h4>
        </Typography>
        <Grid>
        <Grid ref={myRef} item xs={12} className="count">
            <h4 style={{fontSize: '20px'}}>Unreal Engine</h4>
          <CountUp start={countIsVisible ? 0 : null} end={100} delay={3} suffix=" %"/>
        </Grid>
        <Grid item xs={12} className="count">
        <h4 style={{fontSize: '20px'}}>Amazon Lumberyard</h4>

          <CountUp start={countIsVisible ? 0 : null} end={80} delay={4} suffix=" %"/>
        </Grid>
        <Grid item xs={12} className="count">
        <h4 style={{fontSize: '20px'}}>CryEngine</h4>

          <CountUp  start={countIsVisible ? 0 : null} end={50} delay={6} suffix=" %"/>
        </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}