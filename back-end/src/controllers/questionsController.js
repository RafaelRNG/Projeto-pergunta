const express = require("express");
const routes = express.Router();
const knex = require("../database/connection.js");

routes.get("/questions", async (req, res) => {
     const data = await knex("questions");

     res.json({ data });
});

routes.get("/questions/:id", async (req, res) => {
     const { id } = req.params;

     if (isNaN(id)) {
          return res.send(404).send();
     }

     const data = await knex("questions").where("id", id);

     return res.status(200).send(data);

});

routes.post("/questions", async (req, res) => {
     const { title, questionBody, user, sector } = req.body;

     if (!title || !questionBody || !user || !sector) {
          return res.status(400).send();
     }

     await knex("questions").insert({ title, questionBody, user, sector });
     return res.status(201).send();
});

module.exports = routes;