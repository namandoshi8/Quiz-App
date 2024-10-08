import React from "react";
import { useQuiz } from "../Contexts/QuizContext";

export default function Progress() {
  const { index, numberOfQuestions, points, answer, maxPoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numberOfQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numberOfQuestions}
      </p>
      <p>
        Points:{" "}
        <strong>
          {points}/{maxPoints}
        </strong>
      </p>
    </header>
  );
}
