import React, { Component } from 'react';
import { connect } from "react-redux";

class AboutContainer extends Component {
  render () {
    return <div className="about-container">
      <h2>
        About page
      </h2>
      <h3>{this.props.value}</h3>
    </div>
  }
}
 
// export defalt AboutContainer;

const mapStateToProps =({counter}) => ({
  value:counter.value
})

export default connect(mapStateToProps, null)(AboutContainer);