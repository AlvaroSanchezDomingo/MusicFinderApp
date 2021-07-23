import React, { useState } from "react";
import MusicSuggestionCard from "../musicSuggestionCard";
import SampleTrack from "./sampleTrack";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TrackList from "../trackList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TrackListPageTemplate() {
  const classes = useStyles();
  const [chosenSuggestion, setChosenSuggestion] = useState("");
  const tracks = [
    { ...SampleTrack, id: 1 },
    { ...SampleTrack, id: 2 },
    { ...SampleTrack, id: 3 },
    { ...SampleTrack, id: 4 },
    { ...SampleTrack, id: 5 },
  ];

  const handleChange = (value) => {
    setChosenSuggestion(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MusicSuggestionCard
            onUserInput={handleChange}
          />
        </Grid>
        {chosenSuggestion}
        <TrackList tracks={tracks}></TrackList>
      </Grid>
    </Grid>
  );
}
export default TrackListPageTemplate;