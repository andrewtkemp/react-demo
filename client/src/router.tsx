import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { App, Header, Search } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/search" component={Search} />
        </Switch>
      </div>
    </HashRouter>
  );
}