import React from "react";
import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header ">
      <img src={"logo.svg"} className="logo" />

      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="btn">
        <Button variant="info" size="lg" className="btn1">
          Download for ios
        </Button>
        <Button variant="secondary" size="lg" className="btn2">
          Download for mac
        </Button>
      </div>
    </div>
  );
}

export default Header;
