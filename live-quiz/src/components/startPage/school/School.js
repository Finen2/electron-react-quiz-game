import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const SchoolOneThird = (props) => {
  return (
    <div style={schoolThid}>
      <p>School</p>
    </div>
  );
};

export default SchoolOneThird;

var schoolThid = {
  width: 'calc(100vw / 3)',
  background : 'grey',
  margin : '0',
  padding : '0',
  height : '100vh',
  border : '5px dotted green',
  color : 'white'
}
