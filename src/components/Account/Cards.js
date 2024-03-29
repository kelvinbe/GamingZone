import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RadialChart from "./RadialChart";
import ImageAvatars from "./Avatar";
import ComposedCharts from "./ComposedChart";
import useMediaQuery from '@mui/material/useMediaQuery';



const data = [
  { title: "Rate of Gameplay for user", number: 2005, games: "Global" },
];

const data2 = [
    { title: "Rate of online Gameplay for user", number: 2023, games: "Global Gamers Community" },
];
  const data3 = [
    { title: "Rate of offline Gameplay for user", number: 2023, games: "Global Gamers Community" },
];
const data4 = [
    { title: "Total Balance", number: 2005, games: "Global" },
    { title: "Total Balance", number: 2001, games: "Global" },
];

console.log(data);

function OutlinedCard() {
  
  return (
    <Box sx={{ minWidth: 275 }}>
      {data.map((card) => {
        return (
          <Card variant="outlined" key={card.number} style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', overflowX: 'visible', border: "none", boxShadow: "none !important"}}>
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <ImageAvatars/>
            </div>

          </Card>
        );
      })}
    </Box>
  );
}


function SecondCard() {
  const matches = useMediaQuery('(max-width:480px)');

    return (
      <Box sx={{ minWidth: 275, marginLeft: matches ? -4  : 0}}>
        {data2.map((card) => {
          return (
            <Card variant="outlined" key={card.number} style={{ border: "none", boxShadow: "none !important" }}>
              <CardContent>
                <ComposedCharts />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {card.number}
                </Typography>
                <Typography  color="text.secondary">
                  {card.games}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    );
  }

function ThirdCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      {data3.map((card) => {
        return (
          <Card variant="outlined" key={card.number} style={{border: "none", boxShadow: "none !important"}}>
            <CardContent>
                <RadialChart />

              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {card.title}
              </Typography>
              <Typography variant="h5" component="div">
                {card.number}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {card.games}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

function FourthCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      {data4.map((card) => {
        return (
          <Card variant="outlined" key={card.number} style={{border: "none", boxShadow: "none !important"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {card.title}
              </Typography>
              <Typography variant="h5" component="div">
                {card.number}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {card.games}
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}


export {OutlinedCard, SecondCard, ThirdCard, FourthCard}
