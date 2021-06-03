import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

import { MyContext } from "../../container/App";

import Form from "../../components/Form";
import FormField from "../../components/FormField";

import "./index.css";

const HomePage = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(MyContext);

  //remover log
  console.log(userData);

  const handleValidateForm = ({ userName, questionsQtd }) => {
    if (!userName || !questionsQtd)
      return console.error("nome e quantidade de perguntas requeridas");

    setUserData((prevState) => ({ ...prevState, userName, questionsQtd }));
    history.push("/start");
  };

  return (
    <div className="home-page">
      <Formik
        initialValues={{ userName: "", questionsQtd: "" }}
        onSubmit={(values) => {
          handleValidateForm(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="Form">
            <FormField
              name="userName"
              type="text"
              placeholder="Your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
            <FormField
              name="questionsQtd"
              type="number"
              placeholder="Number of questions"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.questionsQtd}
            />
            <Button type="submit" variant="contained" color="primary">
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HomePage;
