import React from "react";
import computerImage from "../images/image-computer.png";
import Data from "./Data";
import Card from "./Card";
function Section1() {
  console.log(Data);
  return (
    <div className="box">
      <div className="text">
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="sides">
        <div className="left_side">
          <img src={computerImage} alt="computer" className="center-image" />
        </div>
        <div className="right_side">
          {Data.map((details) => {
            return <Card item={details} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section1;
