import React, { Component } from 'react';
import Menu from './components/Menu';

class App extends Component{
  state = {
    
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default App;