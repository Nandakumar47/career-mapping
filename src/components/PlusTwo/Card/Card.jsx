import React from "react";
import "./Card.css";
function Card(props) {
  return <div className="card">
      <p>{props.name}</p>
  </div>;
}

export default Card;
