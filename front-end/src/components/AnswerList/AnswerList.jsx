import React from "react";

import "./styles.css";

function AnswerList(props) {
    const list = props.list || [];
    return (
        <div className="answerList">
            <h1>Respostas</h1>
            {
                list.map(value => {
                    return (
                        <div key={value.id} className="valueAnswer">
                            <h2>{value.userName}</h2>
                            <h4>{value.questionAnswers}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AnswerList;
