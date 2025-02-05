import { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import OrderForm from './pages/OrderForm';
import OrderStatus from './pages/OrderStatus';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <OrderForm />
          </Route>
          <Route path="/status">
            <OrderStatus />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
