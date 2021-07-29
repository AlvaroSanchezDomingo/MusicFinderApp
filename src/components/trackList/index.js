import React from "react";
import TrackCard from "../trackCard";
import Grid from "@material-ui/core/Grid";

const TrackList = ( {tracks }) => {
  let trackCards = tracks.map((track) => (
    <Grid key={track.track.key} item xs={12} sm={6} md={5} lg={4} xl={3}>
      <TrackCard key={track.track.key} track={track.track} />
    </Grid>
  ));
  return trackCards;
};

export default TrackList;