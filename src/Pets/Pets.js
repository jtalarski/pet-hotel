import React, { Component } from 'react';
class Pets extends Component {
  state = {
    newPet: {
      owner_name: '',
      pet_name: '',
      color: '',
      breed: '',
      checked_in: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to add a pet');
    this.props.dispatch({ type: 'ADD_PET', payload: this.state.newPet });
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newPet: {
        ...this.state.newPet,
        // computed property
        [propertyName]: event.target.value,
      },
    });
    console.log('current pet state', this.state.newPet);
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
            onChange={(event) => this.handleChangeFor('breed', event)}
          />

          <select>
            <option>Justus</option>
            <option>Leah</option>
          </select>

          <button type='submit'>Submit Pet</button>
        </form>
      </div>
    );
  }
}

export default Pets;
