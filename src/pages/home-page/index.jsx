import React, { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Container, Box, Button } from "@material-ui/core";

import { Formik } from "formik";

import { MyContext } from "../../container/App";

import Form from "../../components/Form";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [hasOldScore, setHasOldScore] = useState(false);
  const {
    userData: { userName, questionsQtd },
    setUserData,
  } = useContext(MyContext);

  const handleValidateForm = ({ userName, questionsQtd }) => {
    if (!userName || !questionsQtd)
      return console.error("informe o nome e quantidade de perguntas");

    setUserData((prevState) => ({ ...prevState, userName, questionsQtd }));
    localStorage.setItem(
      "user",
      JSON.stringify({
        userName,
        questionsQtd,
      })
    );

    history.push("/start");
  };

  const handleToScorePage = () => {
    history.push("/score");
  };

  useEffect(() => {
    if (localStorage.getItem("last-score")) {
      setHasOldScore(true);
    }
  }, []);

  return (
    <Box height="100vh">
      <Container maxWidth="xs" className={classes.container}>
        <Formik
          initialValues={
            userName
              ? { userName, questionsQtd }
              : { userName: "", questionsQtd: "" }
          }
          onSubmit={(values) => {
            handleValidateForm(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="Form">
              <TextField
                name="userName"
                type="text"
                error={!values.userName}
                value={values.userName}
                onChange={handleChange}
                variant="outlined"
                id="outlined-error"
                label="Your name"
              />
              <TextField
                name="questionsQtd"
                type="number"
                error={!values.questionsQtd}
                value={values.questionsQtd}
                onChange={handleChange}
                variant="outlined"
                id="outlined-error"
                label="Number of questions"
              />
              <Button type="submit" variant="contained" color="primary">
                Continue
              </Button>
              <Button
                variant="outlined"
                color="default"
                disabled={!hasOldScore}
                onClick={handleToScorePage}
              >
                View last score
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default HomePage;
