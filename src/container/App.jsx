import { createContext, useState } from "react";

import { Route, Switch } from "react-router-dom";

import Routes from "../routes/routes";

export const MyContext = createContext(null);

import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    userName: "",
    questionsQtd: 0,
    correctAnswers: 0,
  });

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Switch>
          {Routes.map(({ path, component, ...otherProps }, index) => (
            <Route
              path={path}
              component={component}
              key={index}
              {...otherProps}
            />
          ))}
        </Switch>
      </div>
    </MyContext.Provider>
  );
}

export default App;
