import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

// components
import { HomePage, CreatePage, EditPage } from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/create" component={CreatePage} />
            <Route exact={true} path="/edit/:id" component={EditPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
