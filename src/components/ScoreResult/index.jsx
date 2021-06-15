import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Divider } from "@material-ui/core";

import { TextHelper } from "../../helper/question-page.helper";

const useStyles = makeStyles({
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

const ScoreResult = ({ questions, selectedAnswers }) => {
  const classes = useStyles();

  return (
    <Box className={classes.list}>
      {questions.map((question) => (
        <Box key={question.question}>
          <Typography variant="h4">{TextHelper(question.question)}</Typography>
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
              <div key={Math.random()}>
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
                    {console.log(selectedAnswers)}
                    {selectedAnswers.map((selecAnswer) => {
                      return selecAnswer === answer ? "Your answer" : "";
                    })}
                  </span>
                </Typography>
              </div>
            ))}
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default ScoreResult;
