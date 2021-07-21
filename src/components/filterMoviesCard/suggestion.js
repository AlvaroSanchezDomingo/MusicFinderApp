import React from "react";

const Suggestion = props => {
  return (
    <li>
      <h3>{` ${props.term} `}</h3>
    </li>
  );
};

export default Suggestion