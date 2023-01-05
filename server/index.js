const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getGoodGreetings } = require('./controller')

app.get("/api/compliment", getCompliment);

//API Fortune:
app.get("/api/fortunes", getFortunes);

//API Good Greetings:
app.get("/api/goodGreetings", getGoodGreetings);


app.listen(4000, () => console.log("Server running on 4000"));
