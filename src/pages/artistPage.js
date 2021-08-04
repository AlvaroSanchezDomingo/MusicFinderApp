import { search } from "../api/shazan-api";
import React, { useState } from "react";
import MusicSuggestionCard from "../components/musicSuggestionCard";
import Paginator from "../components/paginator";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArtistList from "../components/artistList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const ArtistPage = () => {
  const classes = useStyles();
  const [artists, setArtists] = useState([]);
  const [chosenSuggestion, setChosenSuggestion] = useState("");
  const [page, setPage] = useState(0);

  
  const performSearch = async (searchText, page) => {
      await search(searchText, page).then(result => {
        let hits = result.artists.hits;
        console.log(hits)
        let artistsTemp = []
        hits.map((hit, i) => (
          artistsTemp[i] = hit.artist
        ));
        
        setArtists(artistsTemp);
      });
  }
  const handleChange = async (value) => {
    setChosenSuggestion(value)
    setPage(0)
    await performSearch(value, 0)
  };
  const handlePageLess = async () => {
    if(page > 0){
      setPage(page - 1)
      console.log(page)
      await performSearch(chosenSuggestion, page - 1)
    }
  };
  const handlePageMore = async () => {
    setPage(page + 1)
    console.log(page)
    await performSearch(chosenSuggestion, page + 1)
  };

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={2}>
          <Grid item>
            <MusicSuggestionCard onUserInput={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm container spacing={5}>
          <ArtistList artists={artists}></ArtistList>
          </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paginator page={page} onArrowLeft={handlePageLess} onArrowRight={handlePageMore}/>
      </Grid>
    </Grid>
  );
}
export default ArtistPage;