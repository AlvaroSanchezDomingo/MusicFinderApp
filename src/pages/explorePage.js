import React, { useState } from "react";
import { explore } from "../api/shazan-api";
import Paginator from "../components/paginator";
import Grid from "@material-ui/core/Grid";
import Spinner from '../components/spinner'
import { makeStyles } from "@material-ui/core/styles";
import TrackList from "../components/trackList";
import { useQuery } from 'react-query'
import { LocalActivityRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const ExplorePage = () => {
  const classes = useStyles();
  
  
  const [page, setPage] = useState(0);
  let tracks
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching
  } = useQuery(['explore', page], () => explore(page), { keepPreviousData : true })

  if (isLoading || isFetching) {
    return <Spinner />
  }else{
    tracks= data.tracks
    console.log(data.tracks)
  }

  if (isError) {
    console.log(error)
    return <h1>{error.message}</h1>
  }
  

  const performSearch = async ( page) => {
    setPage(page)
  }
  const handlePageLess = async () => {
    if(page > 0){
      setPage(page - 1)
      console.log(page)
      await performSearch( page - 1)
    }
  };
  const handlePageMore = async () => {
    setPage(page + 1)
    console.log(page)
    await performSearch( page + 1)
  };

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={2}>
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
export default ExplorePage;