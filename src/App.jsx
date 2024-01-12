import { useState } from "react";
import "./App.css";
import { listQuestion } from "./constant/ListQuestion";

function App() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCheckQuizz, setIsCheckQuizz] = useState(true);
  const handleButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (indexQuestion + 1 < listQuestion.length) {
      setIndexQuestion(indexQuestion + 1);
    } else {
      setIsCheckQuizz(false);
    }
  };
  return (
    <>
      {isCheckQuizz ? (
        <div className="box-question">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            câu hỏi {indexQuestion + 1}/{listQuestion.length}
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            {listQuestion[indexQuestion].questionText}
          </p>
          <div className="list-answer">
            {listQuestion[indexQuestion].answerOptions.map((item) => (
              <button
                onClick={() => handleButtonClick(item.isCorrect)}
                key={item.answerText}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="box-display-score">
          <p>
            kết quả: {score} / {listQuestion.length}
          </p>
          <p>đánh giá: {score > 3 ? "đạt" : "quá tệ"}</p>
          <button 
            onClick={() => {
              setIndexQuestion(0);
              setScore(0);
              setIsCheckQuizz(true);
            }}
          >
            làm lại
          </button>
        </div>
      )}
    </>
  );
}

export default App;
