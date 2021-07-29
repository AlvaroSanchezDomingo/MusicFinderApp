//Music Finder App
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import TrackPage from "./pages/trackPage";
import ArtistPage from "./pages/artistPage";
import ExplorePage from "./pages/explorePage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";

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
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
          <Switch>
            <Route exact path="/" component={ExplorePage} />
            <Route exact path="/track" component={TrackPage} />
            <Route exact path="/artist" component={ArtistPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));