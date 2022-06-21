import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Example from "./PieChart";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const data = [
  { title: "Total Balance", number: 2005, games: "Global" },
  { title: "Total Balance", number: 2001, games: "Global" },

];

const data2 = [
    { title: "Total Balance", number: 2005, games: "Global" },
    { title: "Total Balance", number: 2001, games: "Global" },
  
  ];
  const data3 = [
    { title: "Total Balance", number: 2005, games: "Global" },
    { title: "Total Balance", number: 2001, games: "Global" },


  
  ];
  const data4 = [
    { title: "Total Balance", number: 2005, games: "Global" },
    { title: "Total Balance", number: 2001, games: "Global" },
  
  ];
const card = <React.Fragment></React.Fragment>;

console.log(data);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      {data.map((card) => {
        return (
          <Card variant="outlined" key={card.number}>
            <CardContent>
             <Example />
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


function SecondCard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        {data2.map((card) => {
          return (
            <Card variant="outlined" key={card.number}>
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

function ThirdCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      {data3.map((card) => {
        return (
          <Card variant="outlined" key={card.number}>
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

function FourthCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      {data4.map((card) => {
        return (
          <Card variant="outlined" key={card.number}>
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
