import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../api.js";

import "./styles.css";

function AskForm() {
    const [title, setTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [user, setUser] = useState("");
    const [sector, setSector] = useState("");

    const history = useHistory();

    function send(event) {
        event.preventDefault();
        api.post("/questions", {
            title, questionBody, user, sector
        })
            .then(() => history.push("/"))
            .catch(err => console.log("errroooo: " + err))
    }

    return (
        <form>
            <h1 className="ask">Perguntar</h1>
            <main className="mainFormAsk">
                <div className="formAsk">

                    <label>Título</label>
                    <input type="text" value={title} onChange={event => setTitle(event.target.value)} />

                    <label>Setor</label>
                    <select value={sector} onChange={event => setSector(event.target.value)}>
                        <option></option>
                        <option value="Administração">Administração</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Operacional">Operacional</option>
                    </select>

                    <label>Texto</label>
                    <textarea cols="30" rows="10" value={questionBody} onChange={event => setQuestionBody(event.target.value)}></textarea>

                    <label>Nome</label>
                    <input type="text" value={user} onChange={event => setUser(event.target.value)} />
                </div>
            </main>

            <div className="formAskButtons">
                <button onClick={send} className="send">Enviar</button>
                <Link to="/" className="back"> Voltar</Link>
            </div>
        </form>
    )
}

export default AskForm;