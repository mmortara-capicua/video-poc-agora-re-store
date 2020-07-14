import 'bulma/css/bulma.css'
import './App.css'

import React, { Component } from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'

import IframePage from './chat/chat-iframe'
import Index from './index'
import Meeting from './meeting'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="full">
          <Route exact path="/" component={Index} />
          <Route path="/meeting" component={Meeting} />
        </div>
        <IframePage />
      </Router>
    )
  }
}

export default App
