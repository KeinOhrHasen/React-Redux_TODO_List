import React, {Component} from "react";

class LeftRight extends Component{

    _handler = (e) => {
        this.props.onClickNumber(e.target.id);
    }

    render(){
        const numbers = this.props.toRenderArray.map((number) => {
            return (<div className={"number-item"} id={number} key={number} onClick={this._handler}>{number}</div>)
        });
        return (<>
            <h1>{this.props.side} side</h1>
            <div>{numbers}</div>
            </>
        )
    }
}

export default LeftRight;