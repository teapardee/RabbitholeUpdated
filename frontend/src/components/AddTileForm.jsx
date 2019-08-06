import React from "react";

export default class AddTileForm extends React.Component {
  handleClick(e) {
    this.props.handleToggle();
  }

  render() {
    return (
      <div id='addbox' className='suggestiontile'>
        <form
          action='http://localhost:8000/cat_submission=success/'
          method='POST'
        >
          <input
            type='text'
            className='suggestionbox'
            name='cat_submission'
            placeholder='submit categories here . . .'
          />
          <input id='submit' className='submitbutton' type='submit' value='+' />
        </form>
        <div
          id='closetile'
          onClick={this.handleClick.bind(this)}
          className='closetile'
        >
          +
        </div>
      </div>
    );
  }
}
