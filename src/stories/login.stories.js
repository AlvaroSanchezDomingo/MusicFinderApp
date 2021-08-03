import React from "react";
import Login from "../components/login";
import { MemoryRouter } from "react-router";
import AuthProvider from "../contexts/authContext";

export default {
  title: "Login",
  component: Login,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AuthProvider>{Story()}</AuthProvider>,
  ],
};

export const Basic = () => {
  return (<Login />)
};

Basic.storyName = "Default";
