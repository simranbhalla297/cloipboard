import React from "react";
function Card(props) {
  console.log(props);
  return (
    <div className="cardStyle">
      <h3>{props.item.heading}</h3>
      <p>{props.item.para}</p>
    </div>
  );
}
export default Card;
