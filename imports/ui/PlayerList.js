import React from 'react';
import Player from './Player'
import {Players} from './../api/players';

export default class PlayerList extends React.Component {
  renderPlayers(listOfPlayers) {
    if(listOfPlayers.length < 1) {
      return (
        <h3>Please add a candidate to vote for.</h3>
      )
    } else {
      return newPlayerList = listOfPlayers.map((player) => {
        return (
        <Player
          key={player._id}
          id={player._id}
          name={player.name}
          score={player.score}
        />
        )
      })
    }
  }

  render() {
    let players = Players.find({}, { sort: {score: -1} }).fetch()
    return (
      <div>
        {this.renderPlayers(players)}
      </div>
    )
  }
}
