import React from 'react';
import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    return (
      <div className='item' key={this.props.id}>
        <p>
          {this.props.name} has a score of {this.props.score}
        </p>
        <button className='button button--round' onClick={() => {
          Players.update({
            _id: this.props.id
          }, {
            $inc: {
              score: 1
            }
          })
        }}>+1</button>
      <button className='button button--round' onClick={() => {
          Players.update({
            _id: this.props.id
          }, {
            $inc: {
              score: -1
            }
          })
        }}>-1</button>
      <button className='button button--round' onClick={() => {
          Players.remove({_id: this.props.id})
        }}>x</button>
    </div>
    )
  }
}
