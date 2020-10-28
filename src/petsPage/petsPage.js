import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

          {this.props.store.owner === undefined ? (
            <div>you didn't see anything?</div>
          ) : (
            <select
              className='ownerSelectInput'
              onChange={(event) =>
                this.handleChangeFor('owner_name', this.value)
              }
            >
              {this.props.store.room.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          )}

          <button type='submit'>Submit Pet</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(petsPage);
