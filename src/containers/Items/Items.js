import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllItems } from '../../actions/items';
import Items from "../../components/Items";

class ItemsContainer extends Component {
  render () {
    return <div className="items-container">
      <Items items={this.props.items}/>
    </div>
  }

  componentDidMount() {
    this.props.actions.fetchAllItems();
  }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchAllItems
  }, dispatch)
});

const mapStateToProps = (state) => ({
  items: state.itemsData.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);