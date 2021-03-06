import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import PageInThirds from './components/startPage/StartPage'
import LoginPage from './components/startPage/login/LoginRoute'
import RegisterPage from './components/startPage/register/RegisterRoute'
import SchoolPage from './components/startPage/school/SchoolRoute'
import LogedIn from './components/logedIn/InitialPage'


class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={PageInThirds}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/register' component={RegisterPage}/>
            <Route exact path='/school' component={SchoolPage}/>
            <Route exact path='/logedIn' component={LogedIn}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
