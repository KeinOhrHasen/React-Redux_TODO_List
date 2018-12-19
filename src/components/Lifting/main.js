import React, {Component} from "react";
import LeftRight from "./leftRight";

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            leftArray: [0,1,2,3,4],
            rightArray:[5,6,7,8,9],
        }
    }

    _onClickLeftNumber = (val) => {
        if (this.state.leftArray.length > 1) {
            this.setState({
                leftArray:  this.state.leftArray.filter((item) => item !== +val ),
                rightArray: [...this.state.rightArray, +val],
            });
        };
    }

    _onClickRightNumber = (val) => {
        if (this.state.rightArray.length > 1) {
            this.setState({
                rightArray: this.state.rightArray.filter((item) => item !== +val ),
                leftArray:  [...this.state.leftArray, +val],
            });
        };
    }

    render(){
        return (
            <div className={"main-container"}>
                <div className="left-side">
                    <LeftRight
                        side={"left"}
                        toRenderArray={this.state.leftArray}
                        onClickNumber={this._onClickLeftNumber}
                    />
                </div>
                
                <div className="right-side">
                    <LeftRight
                        toRenderArray={this.state.rightArray}
                        onClickNumber={this._onClickRightNumber}
                        side={"right"}
                    />
                </div>
            </div>
        )
    }
}

export default Main;