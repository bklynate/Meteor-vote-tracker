import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

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

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    let jsx = (
      <div>
        <TitleBar
          title='Voter App'
          tagline='Vote for your favorite people!'/>
        {renderPlayers(players)}
        <AddPlayer/>
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
