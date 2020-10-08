import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Test from './components/Test'
import Home from './views/Home'
import CategoryView from './views/CategoryView'
import Cart from './views/Cart'
import Splash from './views/Splash'
import UserSettings from './views/UserSettings'
import SearchProduct from './views/SearchProduct'
import UserAuthentication from './views/UserAuthentication'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Splash />
            </Route>
            <Route path="/home" exact >
              <Home />
            </Route>
            <Route path="/test" exact >
              <Test name="Prop Name" />
            </Route>
            <Route path="/category" exact >
              <CategoryView />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/usersettings" exact>
              <UserSettings />
            </Route>
            <Route path="/searchproduct">
              <SearchProduct />
            </Route>
            <Route path="/user_authentication">
              <UserAuthentication />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
