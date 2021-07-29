import { search } from "../api/shazan-api";
import React, { useState } from "react";
import MusicSuggestionCard from "../components/musicSuggestionCard";
import Paginator from "../components/paginator";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TrackList from "../components/trackList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const TrackPage = () => {
  const classes = useStyles();
  const [tracks, setTacks] = useState([{track:
                                          {
                                            key:20066955,
                                            title:"Kiss The Rain",
                                            subtitle:"Billie Myers",
                                            images:{
                                              background:"https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/4e/0d/1f/4e0d1ff5-9f2e-0170-0ec9-3dbe25f3a471/pr_source.png/800x800cc.jpg"
                                            },
                                            url:"https://www.shazam.com/track/20066955/kiss-the-rain"
                                          }
                                        }]);
  const [chosenSuggestion, setChosenSuggestion] = useState("");
  const [page, setPage] = useState(0);

  
  const performSearch = async (searchText, page) => {
      await search(searchText, page).then(result => {
        let hits = result.tracks.hits;
        let tracksTemp = []
        hits.map((hit, i) => (
          //****************************************continuar por aqui mapear hit[i].track en el array tracksTemp y hacer el setTracks para que sirva cuando hacemos explore y search, el api viene distinto */
        ));
      
        setTacks(result.tracks.hits);
        
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
            <TrackList tracks={tracks}></TrackList>
          </Grid>
      </Grid>
      
      <Grid item xs={12}>
        <Paginator page={page} onArrowLeft={handlePageLess} onArrowRight={handlePageMore}/>
      </Grid>
    </Grid>
  );
}
export default TrackPage;