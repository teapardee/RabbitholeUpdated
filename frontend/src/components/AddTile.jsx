import React from "react";

export default class AddTile extends React.Component {
  handleClick(e) {
    this.props.handleToggle();
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} id='button' className='tile'>
        +
      </div>
    );
  }
}
