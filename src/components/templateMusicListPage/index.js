import { search } from "../../api/shazan-api";
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

  const handleChange = async (value) => {
    await search(value).then(result => {
      setTacks(result.tracks.hits);
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MusicSuggestionCard
            onUserInput={handleChange}
          />
        </Grid>
        <TrackList tracks={tracks}></TrackList>
      </Grid>
    </Grid>
  );
}
export default TrackListPageTemplate;