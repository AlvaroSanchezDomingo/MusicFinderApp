//Music Finder App
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import TrackPage from "./pages/trackPage";
import ArtistPage from "./pages/artistPage";
import ExplorePage from "./pages/explorePage";
import SiteHeader from './components/siteHeader'
import LoginPage from "./pages/loginPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./pages/privateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader /> 
            <Switch>
              <Route exact path="/" component={ExplorePage} />
              <Route path="/login" component={LoginPage} />
              <PrivateRoute exact path="/track" component={TrackPage} />
              <PrivateRoute exact path="/artist" component={ArtistPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));