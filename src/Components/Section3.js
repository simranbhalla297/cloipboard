import React from "react";
import { Button } from "react-bootstrap";
import logoData from "./logoData";
import Logocard from "./Logocard";
function Section3() {
  console.log(logoData);
  return (
    <div className="box">
      <div className="text">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
      </div>
      <div className="logoflex">
        {logoData.map((logo, id) => {
          return (
            <div className="logoMain">
              <Logocard key={id} data={logo} />
            </div>
          );
        })}
      </div>
      <div className="text lower">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>
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

export default Section3;
