import React from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs"

import "./styles.css";

function AskList(props) {

    const list = props.list || [];

    return (
        <div className="askList">
            {list.map(item => (
                <div key={item.id} className="containerAskList">
                    <h2>{item.title}</h2>
                    <h3>{item.questionBody}</h3>
                    <Link to={`/answer/${item.id}`}><BsPencil className="icon" />{props.buttonAskList}</Link>
                </div>
            ))}
        </div>
    )
}

export default AskList;