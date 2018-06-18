import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LogedIn = (props) => {
  return (
    <div style={schoolThid}>
      <p>Loged in</p>

    <header>
      <nav>
        <Link to='/'><Button color="danger">Logout</Button></Link>
       </nav>
    </header>

    </div>
  );
};

export default LogedIn;

var schoolThid = {
  width: '100vw',
  background : 'grey',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
