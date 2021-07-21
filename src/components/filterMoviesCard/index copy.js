import { getGenres } from "../../api/tmbd-api";
import { autoComplete } from "../../api/shazan-api";
import React , {useState}  from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'

import SuggestionList from "./suggestionList";


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(204, 204, 0)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  //const [suggestedList, setSuggestedList] = useState({hints:[{term: "a"},{term: "b"},{term: "c"},{term: "d"}]});
  const [suggestedList, setSuggestedList] = useState({hints:[]});

  const makeSuggestion = (searchText) => {
    //autoComplete(searchText).then(result => {
    //  console.log(result)
    //  suggestedList=result;
    //});
    let codedText = searchText.replace(/ /g, "%20");

    fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      setSuggestedList(result);
    });
  }

  const filterChange = event => {
    event.preventDefault();
    makeSuggestion(event.target.value.toLowerCase());
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
            Search music
        </Typography>

        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={filterChange}
        />
      </CardContent>
      <SuggestionList hints={suggestedList.hints} />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Search music
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}