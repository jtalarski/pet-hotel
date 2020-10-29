import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerItem from '../OwnerItem/OwnerItem';

class Owner extends Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_OWNER'
    });
  }

  // stores owner changes to reduxState
  newOwnerChange = (property, event) => {
    console.log('in newOwnerChange', event.target.value);
    this.props.dispatch({
      type: 'EDIT_OWNER_FOR_UPDATE',
      payload: {
        [property]: event.target.value
      },
    });
  }

  // sends a new owner to the database
  addOwner = () => {
    console.log('in addOwner');
    this.props.dispatch({
      type: 'ADD_OWNER',
      payload: {
        owner: this.props.newOwner,
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Add Owner</h1>
        <input
          type='text'
          placeholder='Owner Name'
          onChange={(event) => this.newOwnerChange('name', event)}
        />
        <button
          onClick={this.addOwner}
        >
          Submit
        </button>
        <h2>Owners</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Number of Pets</th>
            <th>Actions</th>
          </tr>
          <tr>
            {this.props.owner.map(owner =>
              <OwnerItem
                owner={owner}
              />
            )}
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  owner: reduxState.owner,
  newOwner: reduxState.newOwner
})

export default connect(mapStateToProps)(Owner);