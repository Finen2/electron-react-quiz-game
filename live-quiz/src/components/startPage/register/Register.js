import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const RegisterOneThird = (props) => {
  return (
    <div style={thirdRegister}>
      <p>Register</p>

      <header>
        <nav>
          <ul>
            <li><Link to='/register'>Register</Link></li>
          </ul>
         </nav>
      </header>
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
  color : 'white'
}
