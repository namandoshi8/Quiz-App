import React from "react";
import { useQuiz } from "../Contexts/QuizContext";

export default function Options({ questions }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption //if the answer is answered
                ? "correct" //if the answer is correct
                : "wrong" //if the answer is wrong
              : "" //if the answer is not answered
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
