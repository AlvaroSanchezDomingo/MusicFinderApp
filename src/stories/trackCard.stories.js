import React from "react";
import TrackCard from "../components/trackCard";
import SampleTrack from "./sampleTrack";
import { MemoryRouter } from "react-router";

export default {
  title: "Home Page/TrackCard",
  component: TrackCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TrackCard
      track={SampleTrack}
    />
  );
};
Basic.storyName = "Default";

