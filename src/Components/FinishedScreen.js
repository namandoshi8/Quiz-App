import React from "react";

export default function FinishedScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        points {"  "}( {Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> (Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
