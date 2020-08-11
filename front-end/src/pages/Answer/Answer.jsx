import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import AnswerList from "../../components/AnswerList/AnswerList.jsx";
import api from "../../api.js";

import "./styles.css";

function Answer(props) {
    const { id } = props.match.params;

    const [ask, setAsk] = useState([]);

    const [questionAnswers, setQuestionAnswers] = useState("");
    const [userName, setUserName] = useState("");
    const [done] = useState(false);
    const [listAnswer, setListAnswer] = useState([]);
    const question_id = id;
    const history = useHistory();

    useEffect(() => {
        api.get(`/questions/${id}`)
            .then(res => setAsk([...res.data]))
    }, [id]);

    useEffect(() => {
        api.get(`/answers/${question_id}`)
            .then(res => setListAnswer([...res.data]))
    }, [question_id]);

    function answer(event) {
        event.preventDefault();
        return api.post("/answers", { questionAnswers, userName, done, question_id })
            .then(() => history.push("/"))
            .catch(err => console.log(err))
    }

    return (
        <main className="answer">
            <div className="containerAsk">
                {
                    ask.map(value => {
                        return (
                            <div key={value.id}>
                                <h1>{value.title}</h1>

                                <div className="identity">
                                    <h3>nome: {value.user}</h3>
                                    <h3>setor: {value.sector}</h3>
                                </div>

                                <h4>{value.questionBody}</h4>
                            </div>
                        )
                    })
                }

            </div>
            <div className="answerForm">
                <label>Responder</label>
                <textarea
                    value={questionAnswers}
                    onChange={event => setQuestionAnswers(event.target.value)}
                    cols="30" rows="10">
                </textarea>

                <label>Nome</label>
                <input
                    type="text"
                    value={userName}
                    onChange={event => setUserName(event.target.value)} />

                <div className="answerFormButtons">
                    <button onClick={answer}>Responder</button>
                    <Link to="/">Voltar</Link>
                </div>
            </div>

            <div>
                <AnswerList list={listAnswer} />
            </div>
        </main>
    )
}

export default Answer;