import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './Containers/Main'
import About from './Containers/About.js'
import Order from './Containers/Order'
import Submit from './Containers/Submit'
import NavBar from './Containers/NavBar'

class App extends Component {
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
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/submit' component={Submit}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
      
    )
  }
}

export default App;
