import { Route, Switch } from "react-router-dom";

import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Switch>
        {Routes.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
