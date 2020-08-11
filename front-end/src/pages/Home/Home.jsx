import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";

import api from "../../api";
//import AskList from "../../components/AskList/AskList.jsx";
import AskList from "../../components/AskList/AskList";

import "./styles.css";

function Home() {
	const [list, setList] = useState([]);

	useEffect(() => {
		api.get("/questions")
			.then(res => setList([...res.data.data]))
	}, []);

	return (
		<div className="global">
			<h1 className="listTitle">Lista de perguntas</h1>
			<main className="mainHome">
				<div className="container">

					<Link to="/ask" className="askButton">
						<FaWpforms className="icon" />Perguntar
					</Link>

					<AskList list={list} buttonAskList="responder" />
				</div>
			</main>
		</div>
	);
}

export default Home;