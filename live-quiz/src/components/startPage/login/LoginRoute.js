import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LoginPage = (props) => {
  return (
    <div style={loginMain}>
      <p>Login</p>

      <header>
        <nav>
            <Link to='/'><Button color="danger">Back</Button></Link>
            <Link to='/logedIn'><Button color="warning">Login</Button></Link>
         </nav>
      </header>
    </div>
  );
};

export default LoginPage;

var loginMain = {
  width: '100vw',
  background : 'pink',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
