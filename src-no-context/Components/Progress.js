import React from "react";

export default function Progress({
  index,
  numberOfQuestions,
  points,
  answer,
  maxPoints,
}) {
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
