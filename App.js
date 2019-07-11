import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Hello from './Hello';
import About from './About';
import Students from './Students';
import StudentDetails from './StudentDetails';

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
        <Link to="/student">Students</Link>
    
        <Route path="/" component={Hello} exact/>
        <Route path="/about" component={About}/>
        <Route path="/student" component={Students}/>
        <Route path="/student/:n" component={StudentDetails}/>
      </BrowserRouter>
    );
  }
}

export default App;