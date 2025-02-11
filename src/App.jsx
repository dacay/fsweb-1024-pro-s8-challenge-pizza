import { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import OrderForm from './pages/OrderForm';
import OrderStatus from './pages/OrderStatus';

import './App.css'

function App() {

  const [orders, setOrders] = useState([]);

  const handleOrder = (newOrder) => {

    setOrders([...orders, newOrder]);
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home orderCount={orders.length} />
          </Route>
          <Route path="/order">
            <OrderForm onOrder={handleOrder} />
          </Route>
          <Route path="/status">
            <OrderStatus order={orders[orders.length - 1]} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
