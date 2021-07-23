import React from "react";
import TrackCard from "../trackCard";
import Grid from "@material-ui/core/Grid";

const TrackList = ( {tracks }) => {
  let trackCards = tracks.map((track) => (
    <Grid key={track.key} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TrackCard key={track.key} track={track} />
    </Grid>
  ));
  return trackCards;
};

export default TrackList;