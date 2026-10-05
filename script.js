let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =() =>{
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    msg.innerText="Game is draw. Play Again:)";
    msg.style.backgroundColor ="#081b31";
    msg.style.color="white";
}


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`congratulations! You win:) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Sorry! You lose:( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
        msg.style.color="white";
    }
}


const playGame=(userChoice)=>{
    console.log("user choice=", userChoice); // inse cheeze print ho rhi hai console me jaruri nhi hai likhna
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice); // inse cheeze print ho rhi hai console me jaruri nhi hai likhna

    if(userChoice === compChoice){
        //drawGame
        //console.log("game is draw");
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false :true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});