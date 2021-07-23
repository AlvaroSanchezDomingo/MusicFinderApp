import React from "react";
import MusicSuggestionCard from "../components/musicSuggestionCard";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";


export default {
  title: "Home Page/MusicSuggestionCard",
  component: MusicSuggestionCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
  ],
};

export const Basic = () => {
  return <MusicSuggestionCard onUserInput={action("filter input")} />;
};
Basic.storyName = "Default";
