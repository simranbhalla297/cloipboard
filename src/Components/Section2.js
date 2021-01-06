import React from "react";
import device from "../images/image-devices.png";
function Section2() {
  return (
    <div className="box">
      <div className="wrapper">
        <div className="Main-box">
          <div className="section2_text">
            <h2>Access Clipboard anywhere</h2>
            <p>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <div className="center-img topMargin">
            <img src={device} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
