import React from "react";
import ArtistCard from "../components/artistCard";
import SampleArtist from "./sampleArtist";
import { MemoryRouter } from "react-router";

export default {
  title: "Home Page/ArtistCard",
  component: ArtistCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <ArtistCard
      artist={SampleArtist}
    />
  );
};
Basic.storyName = "Default";

