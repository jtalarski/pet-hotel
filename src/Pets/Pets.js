import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerItem from '../OwnerItem/OwnerItem';
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

  deletePlant = (event, id) => {
    console.log('target pet', id);
      this.props.dispatch({
        type: 'DELETE_PET',
        payload: id,})
    this.componentDidMount();
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

          {this.props.owner.name === undefined ? (
            <div>No owners</div>
          ) : (
            <select
              className='ownerSelectInput'
              onChange={(event) => this.onChange('owner_name', event)}
            >
              {this.props.owner.name.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          )}

          <button type='submit'>Submit Pet</button>
        </form>
        <h2>History</h2>
        <table>
          <tr>
            <th>Owner</th>
            <th>Pet</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Checked In</th>
            <th>Actions</th>
          </tr>
          <tr>
            {this.props.owner.map(owner =>
              <OwnerItem
                owner={owner}
              />
            )}
          </tr>
          {this.props.pets.map((item) => (
            <tr>{item.name}</tr>
          ))}
          {this.props.pets.map((item) => (
            <tr>{item.breed}</tr>
          ))}
          {this.props.pets.map((item) => (
            <tr>{item.color}</tr>
          ))}
          {this.props.pets.map((item) => (
            <tr>{item.checked_in}</tr>
          ))}
          <tr>
            <button onClick={(event) => this.deletePet(event)}>Delete</button>
            <button>Check In/out</button>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  owner: reduxState.owner,
  pets: reduxState.pets,
  newPet: reduxState.newPet,
});

export default connect(mapStateToProps)(Pets);
