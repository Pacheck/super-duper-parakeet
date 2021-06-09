import React, { useContext } from "react";

import { MyContext } from "../../container/App";

import {
  Box,
  Container,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { TextHelper } from "../../helper/question-page.helper";

import Report from "../../components/ReportStatus";

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
});

const ScorePage = () => {
  const {
    userData: {
      userName,
      questionsQtd,
      questions,
      correctAnswersCounter,
      wrongAnswersCounter,
      selectedAnswers,
    },
  } = useContext(MyContext);

  const classes = useStyles();

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
        <Box className={classes.list}>
          {questions.map((question) => (
            <Box key={question.question}>
              <Typography variant="h4">
                {TextHelper(question.question)}
              </Typography>
              <ul>
                <Typography
                  variant="subtitle1"
                  className={(classes.answer, classes.right)}
                >
                  {TextHelper(question.correct_answer)}
                </Typography>
                {question.incorrect_answers.map((answer) => (
                  <>
                    <Divider />
                    <Typography
                      variant="subtitle2"
                      className={(classes.answer, classes.wrong)}
                    >
                      {TextHelper(answer)}
                    </Typography>
                  </>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ScorePage;
