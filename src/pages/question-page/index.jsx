import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { MyContext } from "../../container/App";
import { TextHelper } from "../../helper/question-page.helper";

import { Formik } from "formik";

import { makeStyles } from "@material-ui/core/styles";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Radio,
  Box,
  Container,
} from "@material-ui/core";

import Form from "../../components/Form";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const QuestionPage = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(""); //hooks
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState({
    text: "Choose wisely",
    color: "gray",
  });

  const [myIndex, setMyIndex] = useState(0);
  const {
    userData: { questions },
    setUserData,
  } = useContext(MyContext);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const history = useHistory();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setUserData((prevState) => ({
      ...prevState,
      selectedAnswers: [...prevState.selectedAnswers, event.target.value],
    }));
    // setHelperText({ tex: "", color: 'gray'}); //verificar necessidade posterior
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === correctAnswer) {
      setHelperText({ text: "Correct!", color: "#199204" });
      setUserData((prevState) => ({
        ...prevState,
        correctAnswersCounter: prevState.correctAnswersCounter + 1,
      }));
      setError(false);
    } else if (value !== correctAnswer) {
      setHelperText({ text: "Sorry, wrong answer!", color: "#e61a1a" });
      setUserData((prevState) => ({
        ...prevState,
        wrongAnswersCounter: prevState.wrongAnswersCounter + 1,
      }));
      setError(true);
    } else {
      setHelperText({ text: "Please select an option.", color: "#cc9809" });
      setError(true);
    }
  };

  const handleNextQuestion = () => {
    setTimeout(() => {
      setMyIndex(myIndex + 1);
      setHelperText({ text: "Choose wisely", color: "gray" });
      setError(false);
    }, 1000);
  };

  const handleFinish = () => {
    setTimeout(() => {
      history.push("/score");
    }, 500);
  };

  useEffect(() => {
    setMixedAnswers(
      [
        ...questions[myIndex].incorrect_answers,
        questions[myIndex].correct_answer,
      ].sort((a, b) => 0.5 - Math.random())
    );
    setCorrectAnswer(questions[myIndex].correct_answer);
  }, [myIndex]);

  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "#e0d4d4",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "#fff", borderRadius: "5px" }}
      >
        <Formik>
          {() => (
            <Form onSubmit={handleSubmit}>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formControl}
              >
                <FormLabel component="legend">
                  {TextHelper(questions[myIndex].question)}
                </FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  {mixedAnswers.map((answer) => (
                    <FormControlLabel
                      value={answer}
                      control={<Radio />}
                      label={TextHelper(answer)}
                      key={Math.random()}
                    />
                  ))}
                </RadioGroup>
                {/* className={classes.style} */}
                <FormHelperText style={{ color: helperText.color }}>
                  {helperText.text}
                </FormHelperText>
                {questions[myIndex + 1] ? (
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={handleNextQuestion}
                  >
                    Next Question
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    onClick={handleFinish}
                  >
                    Finish
                  </Button>
                )}
              </FormControl>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default QuestionPage;
