const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

// Question 1
function printSeason(season) {
    console.log(season);
}

printSeason("summer");


// Question 2
function printNumbers(firstNumber, secondNumber) {
    console.log("First: " + firstNumber, "Second: " + secondNumber);
}

printNumbers(10, 14);


// Question 3
function addNumbers(firstNumber, secondNumber, thirdNumber) {
    const result = firstNumber + secondNumber + thirdNumber;
    return result;
}

const total = addNumbers(5, 10, 15);

const totalContainer = document.querySelector(".total");
totalContainer.innerHTML = total;


// Question 4
function createGreeting(name) {
    const greeting = "Hello, my name is " + name + ".";
    return greeting;
}

// we can declare a variable called greeting here because the other variable called greeting is scoped to the function
const greeting = createGreeting("Serral");

const nameContainer = document.querySelector("#name");
nameContainer.innerHTML = greeting;


// Question 5
function printListItems(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

printListItems(sports);


// Question 6
function createGames(gamesList) {

    let html = "";

    for(let i = 0; i < gamesList.length; i++) {

        let releaseYear = "Unknown year";

        if(gamesList[i].released) {
            releaseYear = gamesList[i].released;
        }

        html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <p>Released: ${releaseYear}</p>
                </div>`;
    }

    return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;