import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Header />
          <Route path="/" exact component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
