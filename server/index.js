const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getGoodGreetings, getUserInput, getAllUserInputs } = require('./controller')

app.get("/api/compliment", getCompliment);

//API GET Request for Fortune:
app.get("/api/fortunes", getFortunes);

//API  GET Request for Good Greetings:
app.get("/api/goodGreetings", getGoodGreetings);

//Post request for Input:
app.post("/api/addUserInput", getUserInput)

//API  GET Request for Get All Users:
app.get("/api/getAllUsers", getAllUserInputs)


app.listen(4000, () => console.log("Server running on 4000"));
