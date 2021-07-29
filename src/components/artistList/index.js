import React from "react";
import ArtistCard from "../artistCard";
import Grid from "@material-ui/core/Grid";

const ArtistList = ( {artists }) => {
  let artistCards = artists.map((artist) => (
    <Grid key={artist.artist.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
      <ArtistCard key={artist.artist.id} artist={artist.artist} />
    </Grid>
  ));
  return artistCards;
};

export default ArtistList;