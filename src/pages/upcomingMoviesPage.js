import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmbd-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const toDo = () => true;

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={toDo}
    />
  );
};
export default UpcomingMoviesPage;