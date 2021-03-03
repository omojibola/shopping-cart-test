import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} exact />
          <Route path="/" component={Shop} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
