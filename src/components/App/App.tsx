import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

// components
import { HomePage, CreatePage, EditPage, TodoPage } from '../containers';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/create" component={CreatePage} />
        <Route exact={true} path="/edit/:id" component={EditPage} />
        <Route exact={true} path="/todo/:id" component={TodoPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
