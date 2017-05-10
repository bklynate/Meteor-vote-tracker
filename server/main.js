import {Players} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  // Players.insert({
  //   name: "Nate",
  //   score: 14000
  // });

  console.log(Players.find().fetch());
});
