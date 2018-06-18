import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const RegisterPage = (props) => {
  return (
    <div style={registerMain}>
      <p>Register</p>

      <header>
        <nav>
          <Link to='/'><Button color="danger">Home</Button></Link>
         </nav>
      </header>
    </div>
  );
};

export default RegisterPage;

var registerMain = {
  width: '100vw',
  background : 'green',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
