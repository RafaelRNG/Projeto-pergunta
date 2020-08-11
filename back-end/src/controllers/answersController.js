const express = require("express");
const routes = express.Router();
const knex = require("../database/connection.js");

routes.get("/answers", async (req, res) => {
     const data = await knex("answers");
     return res.json(data);
});

routes.get("/answers/:id", async (req, res) => {
     const { id } = req.params;

     if (isNaN(id)) {
          return res.status(404).send();
     }

     const data = await knex("answers").where("question_id", id);
     return res.json(data);
});

routes.post("/answers", async (req, res) => {
     const { questionAnswers, userName, done, question_id } = req.body;

     if (!questionAnswers, !userName, !question_id) {
          return res.status(400).send();
     }

     await knex("answers").insert({ questionAnswers, userName, done, question_id });

     return res.status(201).send();
});

module.exports = routes;
