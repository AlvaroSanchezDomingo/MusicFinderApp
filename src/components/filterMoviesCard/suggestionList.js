import React from "react";
import Suggestion from "./suggestion";

const SuggestionList = props => {

  const suggestions = props.hints.map(item => (
    <Suggestion term ={item.term} />
  ));

  return <ul>{suggestions}</ul>;
};

export default SuggestionList;
