import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Hello from './Hello';
import About from './About';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
    
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    
        <Route path="/" component={Hello} exact/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    );
  }
}

export default App;