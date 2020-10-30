import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetItem extends Component {

  deletePlant = (event, id) => {
    console.log('target pet', id);
    this.props.dispatch({
      type: 'DELETE_PET',
      payload: id,
    })
    this.componentDidMount();
  };

  render() {
    return (
      <>
        <tr>{this.props.pet.name}</tr>
        <tr>{this.props.pet.breed}</tr>
        <tr>{this.props.pet.color}</tr>
        <tr>{this.props.pet.checked_in}</tr>
        <tr>
          <button onClick={(event) => this.deletePet(event)}>Delete</button>
          <button>Check In/out</button>
        </tr>
      </>
    )
  }
}


export default connect()(PetItem);