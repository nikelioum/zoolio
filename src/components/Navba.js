import React, { Component } from "react";
import Clock from 'react-live-clock';
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class Navba extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar light expand="md" className="fixed-top">
          <Container>
            <NavbarBrand href="/">Zoolio</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="a">
                    Επικαιρότητα
                  </Link>
                  {/* <NavLink href="/">Top News</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/business" className="a">
                    Επιχειρήσεις
                  </Link>
                  {/* <NavLink href="/business">Business</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/politics" className="a">
                    Πολιτικά
                  </Link>
                  {/* <NavLink href="/politics">Politics</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/sports" className="a">
                    Αθλητικά
                  </Link>
                  {/* <NavLink href="/sports">Sports</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/health" className="a">
                    Υγεία
                  </Link>
                  {/* <NavLink href="/health">Health</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/travel" className="a">
                    Ταξίδια
                  </Link>
                  {/* <NavLink href="/travel">Travel</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/culture" className="a">
                    Κουλτούρα
                  </Link>
                  {/* <NavLink href="/culture">Culture</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/science" className="a">
                    Επιστήμη
                  </Link>
                  {/* <NavLink href="/science">Science</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/technology" className="a">
                    Τεχνολογία
                  </Link>
                  {/* <NavLink href="/technology">Technology</NavLink> */}
                </NavItem>
                <NavItem>
                  <Link to="/music" className="a">
                    Μουσική
                  </Link>
                  {/* <NavLink href="/music">Music</NavLink> */}
                </NavItem>
              </Nav>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Clock className="myclock" format={'HH:mm'} ticking={true} />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navba;
