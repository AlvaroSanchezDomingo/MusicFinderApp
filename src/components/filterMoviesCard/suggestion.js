import React from "react";

const Suggestion = props => {
  return (
    <li>
      <h3>{` ${props.friend.name.first} ${props.friend.name.last}`}</h3>
      <a href={"mailto:" + props.friend.email}>
        {props.friend.email}{" "}
      </a>
    </li>
  );
};

export default Suggestion