import React from "react";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="main_footer">
        <Row>
          <Col sm>
            <img src={"logo.svg"} className="logoFooter" />
          </Col>
          <Col sm>
            <div className="links">
              <ul className="Mani-links">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Press Kit</a>
                </li>
                <li>
                  <a href="#">Install Guide</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
