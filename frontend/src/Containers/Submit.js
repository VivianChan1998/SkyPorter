import React, {Component} from 'react'
import Steps from '../Components/Steps'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: {
                A: true,
                B: false,
                C: false,
                D: false
            }
        }
    }
    render(){
        return(
            <div>
                <h1>我們收到您的訂單了！</h1>
                <Steps isActive={this.state.isActive.A} title='正在前往你的所在地' ></Steps>
                ↓
                <Steps isActive={this.state.isActive.B} title='正在幫您配送'></Steps>
                ↓
                <Steps isActive={this.state.isActive.C} title='已送達指定地點'></Steps>
                ↓
                <Steps isActive={this.state.isActive.D} title='完成取貨！'></Steps>

            </div>
        )
    }
}

export default Submit