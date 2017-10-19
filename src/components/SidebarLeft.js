import React, { Component } from 'react';
import $ from 'jquery'

class SidebarLeft extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  } 

  handleClick() {
    $.Topic( "randomNumber" ).publish( Math.floor(Math.random()*1000) );
  }

  render () {
    console.log($.Topic)
    return (
      <div style={ { float:"left", height: "100vh", width: "29%", border: "1px solid red" } }>
        <h1>Sidebar Left</h1>
        <button onClick={ this.handleClick }>Click Me</button>
      </div>
    );
  }
}

export default SidebarLeft