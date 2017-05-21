import React from 'react';
import Player from './Player'
import {Players} from './../api/players';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers(listOfPlayers) {
    if(listOfPlayers.length < 1) {
      return (
        <div className='item'>
          <h3 className='item__message'>Please add a candidate to vote for.</h3>
        </div>
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
      <FlipMove maintainContainerHeight={true}>
        {this.renderPlayers(players)}
      </FlipMove>
    )
  }
}
