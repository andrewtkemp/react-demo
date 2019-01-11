import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
