import React, {Component} from 'react'
import { Container, Row, Col, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import MapContainer from '../Components/Maps'; //在MapContainer加上{}會壞掉ㄉ
import './Main.css'
import '../Components/Maps.css'


class Main extends Component {
    render() {
        return(
            <div style={{"position":"relative","width": "100%"}}>
                <h2 className='Main-Title'>SkyPorter</h2>
                <NavLink href='/order' className="Main-button" id="order-button">現在就讓我們幫你運送</NavLink>
                <div className='Map-Container'>
                    <MapContainer />
                </div>
            </div>
        )
    }
}

export default Main