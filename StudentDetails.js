import React from 'react';
const StudentDetails = (props)=>{
console.log(props)
return(
  <div>Hello {props.match.params.n}</div>
)
}

export default StudentDetails;