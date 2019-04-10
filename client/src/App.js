import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MainPage, LoginPage, RegisterPage, ProfilePage } from './components'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
