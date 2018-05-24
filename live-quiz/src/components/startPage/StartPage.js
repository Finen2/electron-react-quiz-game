import React from 'react';
import { Row } from 'reactstrap';
import './StartPage.scss';
import RegisterOneThird from './register/Register'
import SchoolOneThird from './school/School'
import LoginOneThird from './login/Login'

const PageInThirds = (props) => {
  return (
    <Row className="rowMargin">
      <SchoolOneThird />
      <LoginOneThird />
      <RegisterOneThird />
    </Row>
  );
};

export default PageInThirds;
