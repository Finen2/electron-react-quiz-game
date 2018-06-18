import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LogedIn = (props) => {
  return (
    <div style={schoolThid}>

      <header style={navigation}>
        <p>Loged in</p>
        <nav>
          <Link to='/'><Button color="danger">Logout</Button></Link>
         </nav>
      </header>

      <div style={mainContent}>
        <div style={mainParts}>
          <p>Play</p>
        </div>
        <div style={mainParts}>
          <p>Learn</p>
        </div>
        <div style={mainParts}>
          <p>Additinal material</p>
        </div>
        <div style={mainParts}>
          <p>More</p>
        </div>
      </div>

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
  color : 'white',
  display: 'flex',
}

var navigation = {
  width: '8vw',
  height: '100vh',
  background: 'pink'
}

var mainContent = {
  width: 'calc(100vw - 8vw)',
  height: '100vh',
  background: 'yellow',
  display: 'flex',
  flexWrap: 'wrap',
  paddingTop: '7.5vh'
}

var mainParts = {
  marginLeft: '7.5%',
  width: '40%',
  height: '40vh',
  background: 'grey'
}
