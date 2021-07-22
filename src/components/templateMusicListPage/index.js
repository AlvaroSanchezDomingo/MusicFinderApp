import React, { useState } from "react";
import MusicSuggestionCard from "../musicSuggestionCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function MovieListPageTemplate({ movies, action }) {
  const classes = useStyles();
  const [chosenSuggestion, setChosenSuggestion] = useState("");


  const handleChange = (value) => {
    setChosenSuggestion(value);
  };
//<MovieList action={action} movies={displayedMovies}></MovieList>
  return (
    <Grid container className={classes.root}>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MusicSuggestionCard
            onUserInput={handleChange}
            chosenSuggestion={chosenSuggestion}
          />
        </Grid>
        {chosenSuggestion}
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;