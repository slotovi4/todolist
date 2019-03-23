import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// components
import Home from "../Home/Home";
import { Create, List } from "../containers";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/create" component={Create} />
          </Switch>
        </Router>
        <List />
      </Provider>
    );
  }
}

export default App;
