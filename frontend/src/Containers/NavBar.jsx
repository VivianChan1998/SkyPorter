import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      }
    }
    toggleNavbar = () => {
      this.setState((state) => ({ collapsed: !state.collapsed }));
    }
    render() {
      return (
          <Row>
            <Col xs={12}>
              <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">SkyPorter</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/">首頁</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='/about'>關於我們</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
      )
    }
  }
  
  export default NavBar;
  