import React, {Component} from "react";
import Main from "./main";

class Lifting extends Component{
    render(){
        console.log(this.props.match.path);  //Route template string
        console.log(this.props.match.url);   // matched portion of Roure template string   
        
        return (
            <Main></Main>
        )
    }
    
}

export default Lifting;