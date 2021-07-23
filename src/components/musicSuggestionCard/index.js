import { autoComplete } from "../../api/shazan-api";
import React , {useState}  from "react";
import Spinner from '../spinner'

import SuggestionList from "./suggestionList";


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(63, 81, 181)",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const [suggestedList, setSuggestedList] = useState({hints:[]});
  const [chosenSuggestion, setChosenSuggestion] = useState("");

  const makeSuggestion = async (searchText) => {
    if(searchText){
      await autoComplete(searchText).then(result => {
        setSuggestedList(result);
      });
    }
  }
  const filterChange = event => {
    event.preventDefault();
    makeSuggestion(event.target.value.toLowerCase());
  };

  const handleChosenSuggestionChange = (term) => {
    setChosenSuggestion(term);
    props.onUserInput(term);
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
      <SuggestionList hints={suggestedList.hints} onUserInput = {handleChosenSuggestionChange} />
    </Card>
  );
}

//<SuggestionList hints={suggestedList.hints} onUserInput = {handleChosenSuggestionChange} />