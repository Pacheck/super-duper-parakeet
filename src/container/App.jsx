import { createContext, useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Routes from "../routes/routes";

import "./App.css";

export const MyContext = createContext(null);

function App() {
  const [userData, setUserData] = useState({
    userName: "",
    questionsQtd: 0,
    questions: [],
    correctAnswersCounter: 0,
    wrongAnswersCounter: 0,
    selectedAnswers: [],
  });

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      const { userName, questionsQtd } = userStorage;
      setUserData({ ...userData, userName, questionsQtd });
    }
  }, []);

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
