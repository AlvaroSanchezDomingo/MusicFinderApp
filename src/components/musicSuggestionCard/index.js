import { autoComplete } from "../../api/shazan-api";
import React , {useState, useEffect}  from "react";

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
  const [text, setText] = useState("");

  const makeSuggestion = async (searchText) => {
    if(searchText){
      await autoComplete(searchText).then(result => {
        setSuggestedList(result);
      });
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => makeSuggestion(text), 1000);
    return () => clearTimeout(timeOutId);
  }, [text]);


  const handleChosenSuggestionChange = (term) => {
    props.onUserInput(term);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
            Search
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={event => setText(event.target.value)}
        />
      </CardContent>
      <SuggestionList hints={suggestedList.hints} onUserInput = {handleChosenSuggestionChange} />
    </Card>
  );
}
