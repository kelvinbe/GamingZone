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
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import OrderMenus from "../Menu/OrderMenu";
import PlatformsMenus from "../Menu/PlatformsMenu";
import { GetAllGames } from "./GamesApi";
import FooterContainer from "../Footer/footer";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Games = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isGameId, setGameId] = useState(null);
  const [index, setIndex] = useState(1);
  const [selectedGame, setSelectedGame] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);
  const stop = 7;

  const handleHover = (id) => {
    setIsHover(true);
    setGameId(id);
  };

  const handleHoverOut = () => {
    setIsHover(false);
  };


  const handleCardClick = (game) => {
    setSelectedGame(game);
    handleOpen();
  };

  useEffect(() => {
    let interval = null;

    function increment() {
      setIndex((prevIndex) => (prevIndex === stop ? 1 : prevIndex + 1));
    }

    if (isHover) {
      interval = setInterval(increment, 5000);
    } else {
      setIndex(1);
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Clean up the interval when unmounting
  }, [isHover]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await GetAllGames();
        
        // Only update state if the component is still mounted
        if (isMounted) {
          dispatch({ type: "GET_RESULTS", data: resp });
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Mark the component as unmounted
    };
  }, [dispatch]);


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid',
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
  borderColor: 'white'
};


  return (
    <div style={{ height: "100vh", backgroundColor: "maroon"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "maroon",
          paddingTop: 80,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Header />

        <Grid container style={{ justifyContent: "center" }}>
          <Grid item md={12}>
            <h1 className="text-games">Top Upcoming Games</h1>
          </Grid>
          <Grid
            item
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <OrderMenus />
            <PlatformsMenus />
          </Grid>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {results?.map((game, key) => {
                return (
                  <Grid
                    item
                    style={{ padding: 10 }}
                    key={game.id}
                    className="flex-wrapper"
                  >
                    <Card
                      sx={{ maxWidth: 345, width: 354 }}
                      key={game.id}
                      className="tag"
                      onMouseOver={() => handleHover(game.id)}
                      onMouseOut={handleHoverOut}
                      onClick={() => handleCardClick(game)}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
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
                      {isHover && game.id === isGameId ? (
                        <CardMedia
                          component="img"
                          height="194"
                          image={game.short_screenshots[index].image}
                          alt="Paella dish"
                        />
                      ) : (
                        <CardMedia
                          component="img"
                          height="194"
                          image={game.background_image}
                          alt="Paella dish"
                        />
                      )}
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
            </>
          )}
        </Grid>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  {selectedGame && (
            <div>
              <h2>{selectedGame.name}</h2>
              <img alt='photoo' width={'200px'} height={'200px'} src={selectedGame.background_image}/>
              <p>Release Date: {selectedGame.released}</p>
              <p>Genre: {selectedGame.genres[0].name}</p>
              <p>Rating: {selectedGame.rating}</p>
            </div>
          )}
  </Box>
</Modal>
      </div>
      {!isLoading && <FooterContainer />}
    </div>
  );
};

export default Games;
