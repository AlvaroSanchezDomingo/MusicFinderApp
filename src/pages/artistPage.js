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
  const [artists, setArtists] = useState([{artist:
                                          {
                                            avatar:"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/c0/f1/7f/c0f17f01-be7e-8843-acbd-213118400a72/pr_source.png/800x800cc.jpg",
                                            id:"5486081",
                                            name:"Olamide",
                                            verified:false,
                                            adamid:"389401008"
                                          }
                                        }]);
  const [chosenSuggestion, setChosenSuggestion] = useState("");
  const [page, setPage] = useState(0);

  
  const performSearch = async (searchText, page) => {
      await search(searchText, page).then(result => {
        setArtists(result.artists.hits);
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