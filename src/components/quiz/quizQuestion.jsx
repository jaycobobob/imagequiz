import React, { useState } from "react";

const QuizQuestion = (props) => {
    const { answer, choices, picture } = props.question;

    return (
        <div className="d-flex py-3">
            <img src={picture} alt="No hints ;)" />
            <div className="px-4">
                {choices.map((choice, choiceNum) => {
                    return (
                        <div className="form-check" key={`${answer}${choiceNum}`}>
                            <input
                                type="radio"
                                className="form-check-input"
                                name={answer}
                                choice={choice}
                                id={`${answer}-${choice}`}
                                defaultChecked={choiceNum === 0 ? true : false}
                            />
                            <label className="form-check-label">{choice}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizQuestion;
