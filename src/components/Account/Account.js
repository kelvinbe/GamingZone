import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { OutlinedCard, SecondCard, ThirdCard} from "./Cards";
import Header from "../Header/Header";
import FooterContainer from "../Footer/footer";
import MoneyMade from "./MoneyMade";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


export default function Account() {
  return (
    <React.Fragment>
    <Header />
    <Box sx={{ flexGrow: 1 }} style={{marginTop: 80}}>
      <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontSize: '30px', fontWeight: 'bold'}}><h1>My Account</h1></div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
  
            <OutlinedCard />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <div style={{display: 'flex', justifyContent:'center', marginBottom: 20, fontFamily: 'Nunito, sans-serif', fontSize: '30px', fontWeight: 'bold'}}>
          <Typography style={{fontFamily: 'Nunito, sans-serif', fontSize: '30px', fontWeight: 'bold'}} variant="h5">Gaming Revenue Globally</Typography>
          </div>
          <Item>
        <MoneyMade />
        </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Item>
            <SecondCard />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Item>
            <ThirdCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
    <FooterContainer />
    </React.Fragment>
  );
}
