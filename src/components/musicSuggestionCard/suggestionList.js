import React from "react";
import Suggestion from "./suggestion";

const SuggestionList = props => {


  const handleChosenSuggestionChange = (term) => {
    props.onUserInput(term);
  };

  const suggestions = props.hints.map(item => (
    <Suggestion key ={item.term} term = {item.term} onUserInput = {handleChosenSuggestionChange}/>
  ));

  return <ul>{suggestions}</ul>;
};

export default SuggestionList;
