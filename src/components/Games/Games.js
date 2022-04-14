import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Header from "../Header/Header";
import "../Games/Games.css";
import LoaderPage from "../Loader/LoaderPage";
import axios from "axios";
import { Grid } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'

const baseURL= 'https://api.rawg.io/api/games?key=973bd0fd235343c58eebaf81de68b6cd'

const Games = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const results = useSelector((state) => state.results )

  


    

  useEffect( () => {
    const FetchData = async () => {
      try {
        setIsLoading(true)
        const resp = await axios.get(baseURL);
        dispatch({type: 'GET_RESULTS', data: resp.data})
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.error(err);
      }
    }
    FetchData()
    
  }, [dispatch]);

  if (!results) return null;
  const filteredResults = results.results.filter((game) => game.id > 100);

  console.log(results.results);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#9c2a2a",
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
    { isLoading ? <LoaderPage /> :  (
      <>
    <Header />

      <Grid container style={{ justifyContent: "center" }}>
        <Grid item md={12}>
          <h1 style={{ textAlign: "center" }}>Top Upcoming Games</h1>
        </Grid>
        {filteredResults.map((game, key) => {
          return (
            <Grid item style={{ padding: 10 }}>
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
          );
        })}
      </Grid>
      </>
      )}
    </div>
  );
}




export default Games
