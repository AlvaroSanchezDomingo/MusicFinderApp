import React from "react";
import Friend from "./friend";

const SuggestionList = props => {
  // console.log('Render of FilteredFriendList')
  const friends = props.list.map(item => (
    <Friend key={item.email} friend={item} />
  ));
  return <ul>{friends}</ul>;
};

export default SuggestionList;
