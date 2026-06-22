let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#computer");

const resetScores = () => {
    userScore = 0;
    compScore = 0;
    user.innerText = userScore;
    comp.innerText = compScore;
};

const showUserWin = (userWin,userChoiceId,compChoice) => {
    if(userWin)
    {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `Congratulations! you won.Your ${userChoiceId} beats ${compChoice}.`;
        msg.style.backgroundColor = "#0a8754";
        if (userScore === 2) {
            setTimeout(() => {
            alert("You won the match!");
            resetScores();
            }, 100);
        }
    }
    else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `Oops! you lost.${compChoice} beats your ${userChoiceId}.`;
        msg.style.backgroundColor = "#6b0f1a";
        if (compScore === 2) {
            setTimeout(() => {
            alert("Computer won the match!");
            resetScores();
            }, 100);
        }
    }
}

const drawGame = () => {
    msg.innerText = "Game was draw.Play again."
    msg.style.backgroundColor = " #0353a4";
}

const genComputerChoice = () =>{   // computer choice
    const options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const playGame = (userChoiceId) =>{
    const compChoice = genComputerChoice();  // generate comp choice
    if(userChoiceId === compChoice)  // draw
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoiceId === "rock" )
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if ( userChoiceId === "paper" )
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showUserWin(userWin,userChoiceId,compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoiceId = choice.getAttribute("id");   // user choice 
        playGame(userChoiceId);
    })
})
