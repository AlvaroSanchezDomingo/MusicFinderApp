import React from "react";
import TrackList from "../components/trackList";
import SampleTrack from "./sampleTrack";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";


export default {
  title: "Home Page/TrackList",
  component: TrackList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
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
