import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Col, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

const RegisterPage = (props) => {
  return (
    <div style={registerMain}>

      <Form style={formStyle} >
      <p>Register</p>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">School</Label>
          <Input type="text" name="school" id="exampleEmail" placeholder="Your School" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Ålder</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>År</option>
            <option>10 -</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>25 +</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Profile picture</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Type of account</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Teacher
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Student
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio3" />{' '}
              Regular User
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            termes of agrement
          </Label>
        </FormGroup>
        <Link to='/'><Button color="danger">Home</Button></Link>
        <Link to='/logedIn'><Button color="warning">Login</Button></Link>
      </Form>
      <div style={textArea} >
        <p>Text area</p>
        <br />
        <p>Info about the differnt types of accounts</p>
      </div>
    </div>
  );
};

export default RegisterPage;

var registerMain = {
  width: '100vw',
  background : 'green',
  margin : '0',
  padding : '0',
  height : '100vh',
  color : 'white',
  display: 'flex',
}

var formStyle = {
  marginLeft: '5%',
  width: 'calc(100vw / 3)',
  height: '100vh',
  background: 'blue',

}

var textArea = {
  marginLeft: '12.5%',
  marginTop: '15vh',
  width: '40%',
  height: '70vh',
  background: 'blue',

}
