import React, { Component } from 'react';
import $ from 'jquery'

class ContentRight extends Component {
  
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    $.Topic("randomNumber").subscribe( randomNumber => {
      this.setState({
        value: randomNumber
      })
    })
  }
  render () {
    return (
      <div style={ { float:"right", height: "100vh", width: "69%", border: "2px solid blue" } }>
        <h1>Sidebar Left</h1>
        <h2>value: { this.state.value }</h2>
      </div>
    );
  }
}

export default ContentRight