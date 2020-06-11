import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import AnalyticsBar from "./components/AnalyticsBar";
import Stars from "./components/Stars";
import data from "./data";

function App() {
  let [no, setNo] = useState(0);
  let [question, setQuestion] = useState(data[no]);
  let [correct, setCorrect] = useState(question.correct_answer);
  let [check, setCheck] = useState("");
  let [disable, setDisable] = useState(false);
  let [numberOfCorrect, setnumberOfCorrect] = useState(0);

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let random_no = random(0, 3);
  let answers = question.incorrect_answers;
  answers.splice(random_no, 0, question.correct_answer);
  let a = [...new Set(answers)];

  let maxAlgo = Math.floor(
    ((numberOfCorrect + (data.length - no)) / data.length) * 100
  );

  let minAlgo = Math.floor((numberOfCorrect / data.length) * 100);

  return (
    <React.Fragment>
      <ProgressBar fill={((no + 1) / data.length) * 100} />
      <div className="App">
        <div className="header">
          <h3>Question {no + 1} of 20</h3>
          <small>{question.category}</small>
          <Stars
            level={
              question.difficulty === "hard"
                ? 3
                : question.difficulty === "easy"
                ? 1
                : 2
            }
          />
        </div>
        <div className="title-container">
          <h1>{question.question}</h1>
        </div>
        <div className="options-container">
          {a.map((el) => {
            return (
              <button
                key={el}
                className="option"
                disabled={disable}
                onClick={(e) => {
                  setDisable(true);
                  if (e.target.innerText === correct) {
                    setCheck("Correct");
                    numberOfCorrect++;
                    setnumberOfCorrect(numberOfCorrect);
                  } else {
                    setCheck("Sorry");
                  }
                }}
              >
                {el}
              </button>
            );
          })}
        </div>
        <center>
          <h1>{check}</h1>
        </center>
        <center>
          <button
            disabled={!disable}
            className="next-btn"
            onClick={() => {
              no++;
              setNo(no);
              setQuestion(data[no + 1]);
              setCorrect(data[no + 1].correct_answer);
              setDisable(false);
              setCheck("");
            }}
          >
            Next
          </button>
        </center>

        <AnalyticsBar
          minimum={minAlgo}
          maximum={maxAlgo > 100 ? 100 : maxAlgo}
          actual={Math.floor((numberOfCorrect / (no + 1)) * 100)}
          score={Math.floor((numberOfCorrect / (no + 1)) * 100)}
          maxScore={maxAlgo > 100 ? 100 : maxAlgo}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
