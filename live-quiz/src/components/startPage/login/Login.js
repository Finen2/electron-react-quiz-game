import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LoginOneThird = (props) => {
  return (
    <div style={thirdsLogin}>
      <p>Login</p>
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
  border : '5px dotted black',
  color : 'white'
}
