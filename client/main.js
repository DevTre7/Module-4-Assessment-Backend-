const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//------------------------------------------------------------------------

const fortunesButton = document.getElementById("fortunesButton")

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortunesButton.addEventListener('click', getFortunes)
//------------------------------------------------------------------------
//Part 3: add 3 More Features:

const goodGreetingsButton = document.getElementById("greetings")

const getGoodGreetings = () => {
    axios.get("http://localhost:4000/api/goodGreetings/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
}

goodGreetingsButton.addEventListener('click', getGoodGreetings)
//------------------------------------------------------------------------

const inputSpace = document.getElementById("input_space");
const inputButton = document.getElementById("input_btn");

const handleInput = () =>{
    console.log(inputSpace.value)
    axios.post("http://localhost:4000/api/addUserInput/", {value: inputSpace.value})
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

inputButton.addEventListener('click', handleInput)
