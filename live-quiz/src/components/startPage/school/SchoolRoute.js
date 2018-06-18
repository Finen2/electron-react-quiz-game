import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const SchoolPage = (props) => {
  return (
    <div style={schoolMain}>
      <p>School</p>

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

export default SchoolPage;

var schoolMain = {
  width: '100vw',
  background : 'purple',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white'
}
