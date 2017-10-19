import React, { Component } from 'react';

import SidebarLeft from './SidebarLeft'
import ContentRight from './ContentRight'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MyApp</h1>
        <SidebarLeft />
        <ContentRight />
        
      </div>
    );
  }
}

export default App;
