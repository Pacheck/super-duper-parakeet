import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { MyContext } from "../../container/App";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, Container } from "@material-ui/core";

import { UseAxios } from "../../hooks/useAxios";

const useStyles = makeStyles({
  box: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
    height: "25%",
    borderRadius: "10px",
  },
  buttons: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "space-evenly",
    width: "60%",
  },
  userInfo: {
    height: "55%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});

const StartPage = () => {
  const { userData, setUserData } = useContext(MyContext);
  const history = useHistory();
  const classes = useStyles();

  const fetch = async () => {
    const data = await UseAxios(userData.questionsQtd);

    setUserData((prevState) => ({
      ...prevState,
      questions: data,
    }));
  };

  useEffect(() => {
    fetch();
  }, [setUserData]);

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <div className={classes.userInfo}>
          <Typography variant="h2">{userData.userName}</Typography>
          <Typography variant="body1">
            Questions selected: {userData.questionsQtd}
          </Typography>
        </div>
        <div className={classes.buttons}>
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
      </Container>
    </Box>
  );
};

export default StartPage;
