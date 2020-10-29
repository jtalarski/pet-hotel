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
        <td>{this.props.owner.name}</td>
        <td>{this.props.owner.pets}</td>
        <td><button
          onClick={this.deleteOwner}
        >Delete
            </button></td>
      </>
    );
  }
}

export default OwnerItem;



