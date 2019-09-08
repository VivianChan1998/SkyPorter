import React, {Component} from 'react'
import {NavLink} from 'reactstrap'
import MapContainer from '../Components/Maps';
import './Order.css'
import './Main.css'

class Order extends Component {
    constructor(props) {
        super(props)
        var hour = []
        var minute = []
        for(var i=0; i<23; i++) {
            hour[i] = i
        }
        for(var i=0; i<60; i++) {
            minute[i] = i
        }
        this.state={
            hour: hour,
            minute: minute
        }
    }
    render() {
        return (
            <div style={{"position":"relative","width": "100%"}}>
                <h1 className='Main-Title'>送貨行程指定</h1>
                <div className='Order-time'>
                    <select id='order-hour'>
                       {this.state.hour.map(
                           el => <option value={el}>{el}</option> 
                       )}
                    </select>
                    <span> : </span>
                    <select id='order-minute'>
                       {this.state.minute.map(
                           el => <option value={el}>{el}</option> 
                       )}
                    </select>
                </div>
                <div >
                    <MapContainer isSearch='True' />
                </div>
                <NavLink href='submit' className='Main-button' id='Order-submit'>確定！</NavLink>
            </div>
        )
    }
}
export default Order