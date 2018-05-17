import React from "react";

import { render } from "react-dom";

// Import Styles
import css from "./styles/style.styl";

// Import Components
import Controller from "./components/Controller";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// Import React Router
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Controller}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.querySelector("#root"));
