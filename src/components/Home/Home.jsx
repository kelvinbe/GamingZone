import React from 'react'
import Grid from '@mui/material/Grid';
import Console from '../../Assets/Console.svg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';
import Header from '../Header/Header';

import './Home.css'


const Root = styled('img')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        width: 360
      
    },
    [theme.breakpoints.up('md')]: {
        width: 860

    },
    [theme.breakpoints.up('lg')]: {
        width: 860

    },
  }));



export default function Home() {
  return (
      <Box sx={{ flexGrow: 1,  backgroundColor: '#9c2a2a', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
          <Header /> 
    <Grid container className='container-landing'>

        <Grid item xs={12}>
            <Root src={Console} className='img-game' />
        </Grid>
        </Grid>
      </Box>

  )
}
