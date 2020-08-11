const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const questionsController = require("./controllers/questionsController.js");
const answersController = require("./controllers/answersController.js");
const port = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use("/", questionsController);
app.use("/", answersController);


app.listen(port, () => console.log(`back-end rodando na porta ${port}...`));