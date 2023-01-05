const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getGoodGreetings, getUserInput } = require('./controller')

app.get("/api/compliment", getCompliment);

//API Fortune:
app.get("/api/fortunes", getFortunes);

//API Good Greetings:
app.get("/api/goodGreetings", getGoodGreetings);

//Post request for Input:
app.post("/api/addUserInput", getUserInput)


app.listen(4000, () => console.log("Server running on 4000"));
