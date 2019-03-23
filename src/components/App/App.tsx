import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// components
import List from "../List/List";
import Home from "../Home/Home";
import Create from "../Create/Create";

const MainRoutes = () => (
  <React.Fragment>
    <Home />
  </React.Fragment>
);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={MainRoutes} />
            <Route exact={true} path="/create" component={Create} />
          </Switch>
        </Router>
        <List />
      </Provider>
    );
  }
}

export default App;
