import React, { useContext } from "react";

import { MyContext } from "../../container/App";

import { Box, Container, Divider, Typography } from "@material-ui/core";

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
              <div>
                <Typography
                  variant="subtitle1"
                  className={(classes.answer, classes.right)}
                >
                  {TextHelper(question.correct_answer)}
                  <span className={classes.span}>
                    {selectedAnswers.map((selectedAnswer) => {
                      return selectedAnswer === question.correct_answer
                        ? "Your answer"
                        : "";
                    })}
                  </span>
                </Typography>
                {question.incorrect_answers.map((answer) => (
                  <>
                    <Divider />
                    <Typography
                      variant="subtitle2"
                      className={
                        (classes.answer, classes.spanContainer, classes.wrong)
                      }
                      key={Math.random()}
                    >
                      {TextHelper(answer)}{" "}
                      <span className={classes.span}>
                        {selectedAnswers.map((selecAnswer) => {
                          return selecAnswer === answer ? "Your answer" : "";
                        })}
                      </span>
                    </Typography>
                  </>
                ))}
              </div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ScorePage;
