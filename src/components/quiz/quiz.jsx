import React, { useEffect, useState } from "react";
import api from "../../data/api";
import QuizQuestion from "./quizQuestion";

const Quiz = (props) => {
    const flowerName = props.flowerName ? props.flowerName : "";
    let [quiz, setQuiz] = useState();
    let [score, setScore] = useState(-1);

    const postScore = (score) => {
        setScore(score);
        api.saveScore(localStorage.getItem("user"), flowerName, score);
    };

    useEffect(() => {
        const loadData = async () => {
            let res = await api.getFlowers();
            if (res.done) {
                let flowers = res.result;
                let flower = flowers.find((f) => f.name === flowerName);
                if (flower) {
                    const id = flowers.indexOf(flower);
                    res = await api.getQuiz(id);
                    if (res.done) setQuiz(res.result);
                }
            }
        };
        if (!quiz) loadData();
    }, []);

    const checkAnswers = () => {
        let score = 0;
        const inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i += 3) {
            let choices = [inputs[i], inputs[i + 1], inputs[i + 2]];
            let choice = choices.find((input) => input.checked).id.split("-")[1];

            if (choice === quiz.questions[i / 3].answer) {
                score++;
            }
        }
        postScore(score);
    };

    if (!quiz) {
        return <p>Quiz not found</p>;
    } else {
        return (
            <div>
                <h1>{flowerName} Quiz</h1>
                <h5>For each picture, choose the word that best matches the picture</h5>
                <div>
                    {quiz.questions.map((question, qNum) => {
                        return <QuizQuestion key={`q ${qNum}`} question={question} />;
                    })}
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary" onClick={checkAnswers}>
                        Check your answers
                    </button>
                    {score !== -1 && <p className="px-3 m-0">You got {score} out of 6</p>}
                </div>
            </div>
        );
    }
};

export default Quiz;
