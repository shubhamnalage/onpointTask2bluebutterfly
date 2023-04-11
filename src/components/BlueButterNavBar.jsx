import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlueButterNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ marginRight: "3rem" }}>
          <img
            src="https://bluebutterfly.com/wp-content/uploads/2021/02/bluebutterfly-logo.png"
            width="162"
            height="38"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              Memorial Pages{" "}
              <Badge
                pill
                bg="danger"
                style={{
                  position: "relative",
                  opacity: "1 !important",
                  background:
                    "linear-gradient(to right bottom,#fbedb7,#f1a19d,#f375d4)",
                  bottom: "100%",
                  fontWeight: "700",
                  paddingBottom: "2px",
                }}
              >
                Free
              </Badge>
            </Nav.Link>
            <NavDropdown title="Virtual services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Virtual Memorial Service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Live Streamed Memorial
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search For Memorial"
              className="me-2"
              aria-label="Search"
              icon="fas fa-search"
            />
            {/* <FontAwesomeIcon  /> */}
          </Form>
          <Nav.Link
            href="#my_account"
            style={{ marginRight: "1rem", marginLeft: "1rem" }}
          >
            My Account
          </Nav.Link>
          <Button
            // variant="primary"
            size="lg"
            style={{
              background:
                "linear-gradient(100.65deg,#87aef8 -4.75%,#27276f 106.78%)",
              borderRadius: "16px",
            }}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BlueButterNavBar;
