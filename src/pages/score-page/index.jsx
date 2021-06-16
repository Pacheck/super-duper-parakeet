import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../container/App";
import { useHistory } from "react-router-dom";

import { Box, Container, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Report from "../../components/ReportStatus";
import ScoreResult from "../../components/ScoreResult";

const useStyles = makeStyles({
  box: {
    height: "100%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    display: "flex",
    padding: "40px 0px",
  },
  container: {
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  status: {
    marginTop: "20px",
  },
  button: {
    margin: "20px 0px",
  },
});

const ScorePage = () => {
  const [hasScore, setHasScore] = useState(false);
  const [oldScore, setOldScore] = useState(null);
  const {
    userData: {
      userName,
      questions,
      correctAnswersCounter,
      wrongAnswersCounter,
      selectedAnswers,
    },
  } = useContext(MyContext);

  const history = useHistory();
  const classes = useStyles();

  const handleGoToHome = () => history.push("/");

  useEffect(() => {
    if (localStorage.getItem("last-score") && questions.length <= 0) {
      setHasScore(true);
      setOldScore(JSON.parse(localStorage.getItem("last-score")));
    } else {
      setHasScore(false);
    }
  }, []);

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Box className={classes.status}>
          <Typography variant="h2" gutterBottom>
            {userName},
          </Typography>
          <Report
            correctAnswersCount={correctAnswersCounter}
            wrongAnswersCount={wrongAnswersCounter}
          />
        </Box>
        <ScoreResult
          questions={hasScore ? oldScore.questions : questions}
          selectedAnswers={
            hasScore ? oldScore.selectedAnswers : selectedAnswers
          }
        />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleGoToHome}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default ScorePage;
