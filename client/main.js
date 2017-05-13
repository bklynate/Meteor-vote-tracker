import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let jsx = (
      <div>
        <TitleBar
          title='Voter App'
          tagline='Vote for your favorite people!'/>
        <PlayerList/>
        <AddPlayer/>
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
