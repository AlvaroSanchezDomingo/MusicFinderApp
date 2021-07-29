import React from "react";
import Button from '@material-ui/core/Button';


const Suggestion = props => {

  const handleChosenSuggestionChange = (term) => {
    props.onUserInput(term);
  };

  return (
    <li>
      
      <Button onClick={() => { handleChosenSuggestionChange(props.term)}}>{` ${props.term} `}</Button>

    </li>
  );
};

export default Suggestion
