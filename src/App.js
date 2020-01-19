import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";

import "./App.css";
import { Switch, Route } from "react-router-dom";
/*
const HatsPage = () => (
  <div>
    <h1>This is the Hats Page!</h1>
  </div>
);
*/
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
