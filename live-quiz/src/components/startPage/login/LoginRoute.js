import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LoginPage = (props) => {
  return (
    <div style={loginMain}>
      <p>Login</p>

      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
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
  border : '5px dotted black',
  color : 'white'
}
