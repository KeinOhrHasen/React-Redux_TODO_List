import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeCounter, clearCounter, changeCounterAsync } from "../../actions/counter";
import {bindActionCreators} from "redux";

class HomeContainer extends Component {
  render () {
    const {disabled, actions } = this.props;
    return <div className="home-container">
      <h2>
        Home page
      </h2>
      <h3>{this.props.value}</h3>
      <button onClick={()=>actions.changeCounter(1)}>+</button>
      <button onClick={()=>actions.changeCounter(-1)}>-</button>
      <button onClick={()=>actions.clearCounter()}>Clear</button>

      <br></br>
      <h5>Add Async</h5>
      <button disabled={disabled} onClick={()=>actions.changeCounterAsync(1)}>+Asynk</button>
      <button disabled={disabled} onClick={()=>actions.changeCounterAsync(-1)}>-Asynk</button>
    </div>
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeCounter,
    clearCounter,
    changeCounterAsync
  }, dispatch)
});

const mapStateToProps = ({counter}) =>({
  value:counter.value,
  disabled:counter.disabled,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
