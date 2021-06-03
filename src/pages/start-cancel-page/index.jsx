import React from "react";

import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const StartPage = () => {
  const history = useHistory();

  return (
    <div className="start-page">
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
