import React from 'react';
import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.rank}`
    return (
      <div className={itemClassName} key={this.props.id}>
        <div className='player'>
          <div>
            <h3 className='player__name'>{this.props.name}</h3>
            <p className='player__stats'>
              {this.props.position} place - with {this.props.score} vote(s)
            </p>
          </div>
          <div className='player__actions'>
            <button className='player__actions button button--round' onClick={() => {
              Players.update({
                _id: this.props.id
              }, {
                $inc: {
                  score: 1
                }
              })
            }}>+1
            </button>
            <button className='player__actions button button--round' onClick={() => {
                Players.update({
                  _id: this.props.id
                }, {
                  $inc: {
                    score: -1
                  }
                })
              }}>-1
            </button>
            <button className='player__actions button button--round' onClick={() => {
                Players.remove({_id: this.props.id})
              }}>x
            </button>
          </div>
        </div>
      </div>
    )
  }
}
