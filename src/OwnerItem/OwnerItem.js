import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerItem extends Component {

  deleteOwner = () => {
    console.log('in deleteOwner');
    this.props.dispatch({
      type: 'DELETE_OWNER'
    });
  }

  render() {
    return (
      <>
        <tr>{this.props.owner.name}</tr>
        <tr>{this.props.owner.pets}</tr>
        <tr><button
          onClick={this.deleteOwner}
        >Delete
            </button></tr>
      </>
    );
  }
}

export default OwnerItem;



