import React from "react";
import Options from "./Options";
import { useQuiz } from "../Contexts/QuizContext";
function Question() {
  //   console.log(questions);
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options questions={question} />
    </div>
  );
}
export default Question;
