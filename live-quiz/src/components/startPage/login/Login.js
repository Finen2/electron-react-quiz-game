import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LoginOneThird = (props) => {
  return (
    <div style={thirdsLogin}>
      <p>Login</p>

      <header>
            <Link to='/login'><Button color="danger">Login</Button></Link>
      </header>
    </div>
  );
};

export default LoginOneThird;

var thirdsLogin = {
  width: 'calc(100vw / 3)',
  background : 'blue',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
