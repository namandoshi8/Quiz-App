import React from "react";
import { useQuiz } from "../Contexts/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, numberOfQuestions } = useQuiz();
  if (answer === null) {
    return null;
  }
  if (index < numberOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numberOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
