import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import FadeTailwind from './components/FadeTailwind'
import Main from './components/Main'

function App () {
  return (
    <>
      <Router>
        <Main />
        <Switch>
          <Route path='/fade'>
            <FadeTailwind />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
