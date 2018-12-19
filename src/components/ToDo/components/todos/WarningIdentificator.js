import React, {Component} from "react"
import {Button} from "semantic-ui-react"

export default class WarningIdentificator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["red", "yellow", "green"],
            status: undefined
        }
    }
    
    componentDidMount(){
        let hoursdiff = (new Date(this.props.expires_at) - (new Date()) )/3600/1000
        if (hoursdiff < 1 ) 
            this.setState({
                status:"red"})
        else if (hoursdiff <= 3 )
            this.setState({
                status:"yellow"})
        else this.setState({
            status:"green"})
    }


    render(){
        return (
            <Button className="status-btn" color={ this.state.status ? this.state.status : "grey"  } onClick={this.props.createTodo }>
                
            </Button>
    );
    } 
}