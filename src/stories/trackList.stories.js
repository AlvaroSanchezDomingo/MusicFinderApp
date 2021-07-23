import React from "react";
import TrackList from "../components/trackList";
import SampleTrack from "./sampleTrack";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/TrackList",
  component: TrackList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const tracks = [
    { ...SampleTrack, id: 1 },
    { ...SampleTrack, id: 2 },
    { ...SampleTrack, id: 3 },
    { ...SampleTrack, id: 4 },
    { ...SampleTrack, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TrackList
        tracks={tracks}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
