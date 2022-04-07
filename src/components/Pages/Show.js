import React from 'react'
import Grid from '@mui/material/Grid';
import Spidy from '../../Assets/spidy.jpg'
import Sink from '../../Assets/game.jpg'


import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import './Show.css'
import { Typography } from '@mui/material';


const Root = styled('img')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        width: 360
      
    },
    [theme.breakpoints.up('md')]: {
        width: 333

    },
    [theme.breakpoints.up('lg')]: {
        width: 420

    },
  }));



export default function Show() {
  return (
    <Box sx={{ flexGrow: 1,  backgroundColor: 'black', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
<Grid container className='container-show'>
       <Typography style={{color: 'white'}}>
<h1> Get New and trending</h1>
<h4>Based on player counts and release date</h4> 
</Typography>
<Grid>
  <Grid item xs={12} md={12}>

      <Root src={Sink} className='img-game' />


  </Grid>
  <Grid item xs={12} md={12}>

      <Root src={Spidy} className='img-game' />


  </Grid>
  </Grid>
  
  </Grid>
</Box>
  )
}
