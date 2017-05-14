import React from 'react';

export default class TitleBar extends React.Component {
  render() {
    let title = this.props.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

TitleBar.defaultProps = {
  // just put this here as a reference
  // in case of a need to set default props
}
