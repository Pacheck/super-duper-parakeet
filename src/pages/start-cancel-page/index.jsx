import React, { useContext, useEffect } from "react";

import { MyContext } from "../../container/App";

import Button from "@material-ui/core/Button";

import { UseAxios } from "../../hooks/useAxios";

import { useHistory } from "react-router-dom";

const StartPage = () => {
  const { userData, setUserData } = useContext(MyContext);
  const history = useHistory();

  const fetch = async () => {
    const data = await UseAxios(userData.questionsQtd);

    console.log(data);

    setUserData((prevState) => ({
      ...prevState,
      questions: data,
    }));
  };

  useEffect(() => {
    fetch();
  }, [setUserData]);

  return (
    <div className="start-page">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => console.log(userData)}
      >
        Get User Data
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/question")}
      >
        Start
      </Button>
    </div>
  );
};

export default StartPage;
