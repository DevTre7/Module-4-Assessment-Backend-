const emptyArray = [];


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    //FortuNE Quotes:
    getFortunes: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", 
        "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way."];
      
        // choose random fortunes
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortuneQuotes = fortunes[randomIndex2];
      
        res.status(200).send(randomFortuneQuotes);
    },

    //     //Add 3 More Features:1ST: Good Greeting Messages:
    getGoodGreetings: (req, res) => {
        const greetings = ["Hello!","Hi there.", "Good morning!", "What's Up!" ];
      
        // choose random greetings
        let randomIndex3 = Math.floor(Math.random() * greetings.length);
        let randomGoodGreetings = greetings[randomIndex3];
      
        res.status(200).send(randomGoodGreetings);
    },

    //Add 3 More Features: 2ND - 
    getUserInput: (req,res) => {
        const userInput = req.body.value;
        emptyArray.push(userInput)

        res.status(200).send(userInput)
    },

    //Add 3 More Features: 3RD

    getAllUserInputs
}