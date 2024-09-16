import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  //   useEffect(function () {
  //     setInterval(function () {
  //       //   console.log("tick");
  //       dispatch({ type: "tick" });
  //     }, 1000);
  //   }, []);

  const minutes = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
