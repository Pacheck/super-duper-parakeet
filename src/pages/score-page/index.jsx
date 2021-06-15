import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../container/App";

import { Box, Container, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Report from "../../components/ReportStatus";
import ScoreResult from "../../components/ScoreResult";

const useStyles = makeStyles({
  box: {
    height: "100vh",
    backgroundColor: "#eee",
    display: "flex",
  },
  answer: {
    backgroundcolor: "black",
  },
  wrong: {
    color: "#b81717",
  },
  right: {
    color: "#117411",
  },
  spanContainer: {
    position: "relative",
  },
  span: {
    position: "absolute",
    right: "60%",
    color: "#b3afaf",
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

  const classes = useStyles();

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
      <Container>
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
      </Container>
    </Box>
  );
};

export default ScorePage;
