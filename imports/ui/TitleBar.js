import React from 'react';

export default class TitleBar extends React.Component {
  render () {
    let title = this.props.title;
    let tagline = this.props.tagline;
    return (
      <div>
        <h1>{title}</h1>
        <h4>{tagline}</h4>
      </div>
    );
  }
}

TitleBar.defaultProps = {
  // just put this here as a reference
  // in case of a need to set default props
}
