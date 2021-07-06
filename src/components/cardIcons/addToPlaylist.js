import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

const AddToPlaylist = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handlePlaylistAdd = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
    console.log(context.playlist)
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handlePlaylistAdd}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylist;