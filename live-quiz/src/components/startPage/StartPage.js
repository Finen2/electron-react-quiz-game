import React from 'react';
import { Row } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom'
import './StartPage.scss';
import RegisterOneThird from './register/Register'
import SchoolOneThird from './school/School'
import LoginOneThird from './login/Login'

const PageInThirds = (props) => {
  return (
    <div>
      <Row className="rowMargin">
        <SchoolOneThird />
        <LoginOneThird />
        <RegisterOneThird />
      </Row>

    </div>
  );
};

export default PageInThirds;
