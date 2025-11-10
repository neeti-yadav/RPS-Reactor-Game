let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    Math.floor(Math.random)


}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    console.log("Choice was clicked", userChoice);
    playGame(userChoice);

    });
});