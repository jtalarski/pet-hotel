import React, { Component } from 'react';
import { connect } from 'react-redux';

class petsPage extends Component {
  state = {
    newPet: {
      owner_name: '',
      pet_id: '',
      pet_name: '',
      color: '',
      breed: '',
      checked_in: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to add a pet');
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newPet: {
        ...this.state.newPet,
        // computed property
        [propertyName]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Pets Page</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Pet Name'
            onChange={(event) => this.handleChangeFor('pet_name', event)}
          />

          <input
            type='text'
            placeholder='Pet Color'
            onChange={(event) => this.handleChangeFor('color', event)}
          />

          <input
            type='text'
            placeholder='Pet Breed'
            onChange={(event) => this.handleChangeFor('pet_name', event)}
          />

          <button type='submit'>Submit Pet</button>
        </form>
      </div>
    );
  }
}

export default connect()(petsPage);
