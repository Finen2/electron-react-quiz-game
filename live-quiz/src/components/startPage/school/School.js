import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const SchoolOneThird = (props) => {
  return (
    <div style={schoolThid}>
      <p>School</p>

    <header>
      <nav>
        <Link to='/school'><Button color="danger">School</Button></Link>
       </nav>
    </header>

    </div>
  );
};

export default SchoolOneThird;

var schoolThid = {
  width: 'calc(100vw / 3)',
  background : 'grey',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
