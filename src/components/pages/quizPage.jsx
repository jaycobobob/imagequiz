import React, { useState } from "react";
import { quizzes } from "../data";
import Navbar from "../navbar";

const QuizPage = ({ match, location }) => {
  let [score, setScore] = useState(-1);

  let flowerName = match.params.flowerName;
  return (
    <>
      <Navbar />
      <div className="p-3">
        <p className="h1">
          For each question, select the word that best matches the picture.
        </p>
        <div>
          {quizzes[flowerName].questions.map((question, i) => {
            return (
              <Question question={question} qNum={i + 1} key={i}></Question>
            );
          })}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                setScore(checkScore(flowerName));
              }}
            >
              Check Answers
            </button>
            <div className="d-flex px-3 align-middle">
              {score !== -1 && <div>You scored {score}/6</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Question = (props) => {
  let { question, qNum } = props;
  return (
    <div className="d-flex flex-column py-3">
      <p className="h3">{`Question ${qNum}`}</p>
      <div className="d-flex">
        <img src={question.picture}></img>
        <div className="px-3">
          {question.choices.map((choice, i) => {
            return (
              <div className="form-check" key={i}>
                <input
                  type="radio"
                  className="form-check-input"
                  name={`Question${qNum}`}
                  value={choice}
                  required
                ></input>
                <label className="form-check-label">{choice}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const checkScore = (flowerName) => {
  let score = 0;
  for (let i = 1; i < 7; i++) {
    let options = document.querySelectorAll(`[name=Question${i}]`);
    let answer = quizzes[flowerName].questions[i - 1].answer;

    for (let option of options) {
      if (option.checked && option.value === answer) {
        score++;
      }
    }
  }
  return score;
};

export default QuizPage;
