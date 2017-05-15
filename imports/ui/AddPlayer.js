import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let playerName = event.target.playerName.value;
    if (playerName) {
      event.target.playerName.value = " ";
      Players.insert({name: playerName, score: 0});
    }
  }

  render() {
    return (
      <div className='item'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='playerName' placeholder="Add Candidate"/>
        <button className='button'>Add Candidate</button>
        </form>
      </div>
    );
  }
}
