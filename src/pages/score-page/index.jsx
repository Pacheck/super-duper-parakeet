import React, { useContext } from "react";

import { MyContext } from "../../container/App";

import { TextHelper } from "../../helper/question-page.helper";

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

  return (
    <div className="score-page">
      <h1>{userName}</h1>
      <h2>você teve um total de {correctAnswersCounter} acertos</h2>
      <h2>você teve um total de {wrongAnswersCounter} erros</h2>
    </div>
  );
};

export default ScorePage;
