import React, {Component} from 'react'

class Steps extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var style = this.props.isActive? {"background":"blue"}:{"background":"none"}
        return(
            <div style={style}>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Steps;