import React, { Component } from 'react';
import { connect } from 'react-redux';

class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Add Owner</h1>
        <input
          type='text'
          placeholder='Owner Name'
        />
        In Owner
      </div>
    )
  }
}

export default Owner;