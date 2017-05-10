import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players';

const renderPlayers = (listOfPlayers) => {
  return newPlayerList = listOfPlayers.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has a score of {player.score}
        <button onClick={() => {
          Players.update({
            _id: player._id
          }, {
            $inc: {
              score: 1
            }
          })
        }}>+1</button>
        <button onClick={() => {
          Players.update({
            _id: player._id
          }, {
            $inc: {
              score: -1
            }
          })
        }}>-1</button>
        <button onClick={() => {
          Players.remove({_id: player._id})
        }}>x</button>
      </p>
    )
  })
};

const handleSubmit = (event) => {
  event.preventDefault();
  let playerName = event.target.playerName.value;
  if (playerName) {
    event.target.playerName.value = " ";
    Players.insert({name: playerName, score: 0})
  }
}
Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    let title = "Vote Tracker";
    let name = "Nate";
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello, {name}!</p>
        <p>This is another p element.</p>
        {renderPlayers(players).sort()}

        <form onSubmit={handleSubmit}>
          <input type='text' name='playerName' placeholder="Add Candidate"/>
          <button>Add Candidate</button>
        </form>
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
