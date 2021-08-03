import React from "react";
import ArtistList from "../components/artistList";
import SampleArtist from "./sampleArtist";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";


export default {
  title: "Home Page/ArtistList",
  component: ArtistList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const artists = [
    { ...SampleArtist, id: 1 },
    { ...SampleArtist, id: 2 },
    { ...SampleArtist, id: 3 },
    { ...SampleArtist, id: 4 },
    { ...SampleArtist, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ArtistList
        artists={artists}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
