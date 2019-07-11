import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

class Student extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          'name':'omkar',
          'age':30
        },
        {
          'name':'raju',
          'age':32
        }
        ]
    };
  }

  render() {
    return (
      <ul>
        {
          this.state.students.map((s)=>{
            var p = `/student/${s.name}`;
              return <li>
                <Link to={p}>{s.name}</Link>
              </li>
          })
        }
      </ul>
    );
  }
}

export default Student;