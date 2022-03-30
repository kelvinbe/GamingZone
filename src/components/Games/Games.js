import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Header from '../Header/Header';

import axios from 'axios';
import { Grid } from '@mui/material';

export default function Games() {


    const [results, setResults] = useState(null)


    const baseURL = 'https://api.rawg.io/api/games?key=973bd0fd235343c58eebaf81de68b6cd'

    useEffect(() => {
        axios.get(baseURL).then((response) =>{
            setResults(response.data)
        })
    },[])

    if(!results) return null
    const filteredResults = results.results.filter(game => game.id < 100 )

    console.log(results.results)

  return (
      <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#9c2a2a', paddingTop: 80, height: '100vh'}}>
      <Header />

          <Grid container style={{justifyContent: 'center'}}>
  { filteredResults.map((game, key) => {

return (
<Grid item style={{padding: 10}}>
<Card sx={{ maxWidth: 345 }} key={game.id}>
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={game.name}
  subheader={game.released}
/>
<CardMedia
  component="img"
  height="194"
  image={game.background_image}
  alt="Paella dish"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    genre: {game.genres[0].name}
    <br />
   Rating: {game.rating}
   <br />
   Tags: {game.tags[0].name}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>

</Card>
</Grid>

)

  }) }

  </Grid>
  
</div>
  )
}
