import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const SchoolPage = (props) => {
  return (
    <div style={schoolMain}>
      <p>School</p>

      <header>
        <nav>
          <Link to='/'><Button color="danger">Home</Button></Link>
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
