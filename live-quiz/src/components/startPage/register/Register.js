import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const RegisterOneThird = (props) => {
  return (
    <div style={thirdRegister}>
      <p>Register</p>
    </div>
  );
};

export default RegisterOneThird;

var thirdRegister = {
  width: 'calc(100vw / 3)',
  background : 'red',
  margin : '0',
  padding : '0',
  height : '100vh',
  border : '5px dotted yellow',
  color : 'white'
}
