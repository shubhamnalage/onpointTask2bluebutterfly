import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/style.css";

const Home = () => {
  return (
    // <div>
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col xs={12} md={5}>
          <h1
            // className="hero-sec-heading"
            style={{
              fontWeight: "500",
              fontSize: "74px",
              lineHeight: "84px",
              fontFamily: "Recoleta",
            }}
          >
            Every Life
            <br />
            Has
            <span className="hero-sec-heading"> a Story.</span>
          </h1>
          <div style={{ marginTop: "2rem" }}>
            <span
              style={{
                fontWeight: "500",
                fontSize: "36px",
                lineHeight: "44px",
                fontFamily: "Recoleta",
              }}
            >
              We Help You Share It.
            </span>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <p style={{ padding: "0 0 29px" }}>
              Welcome. We’re here to help you. You can plan and host a
              beautiful, affordable virtual funeral service or create a free
              online memorial page in just a few easy steps.
            </p>
          </div>
          <Row className="d-flex">
            <Col xs={6} md={4}>
              <Button
                style={{
                  background:
                    "linear-gradient(100.65deg,#87aef8 -4.75%,#27276f 106.78%)",
                  size: "lg",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  fontFamily: "NotoSans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "NotoSans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  Get Started
                </span>
              </Button>
            </Col>
            <Col xs={6} md={8}>
              <Button
                variant="outline-secondary"
                style={{ borderradius: "16px" }}
                size="lg"
              >
                {" "}
                <i aria-hidden="true" className="fas fa-phone-alt"></i>
                Call Us: 888-759-2989
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7}>
          <img
            src="https://bluebutterfly.com/wp-content/uploads/2023/02/funeral-planner.png"
            className="d-inline-block align-top"
            alt="img1"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default Home;
