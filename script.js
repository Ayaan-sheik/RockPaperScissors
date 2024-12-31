function getComputerChoice(){
    let n = Math.floor((Math.random() * 3) + 1);

    if (n === 1){
        return "Rock";
    }else if(n==2){
        return "Paper";
    }else "Scissors";

}

function getHumanChoice(a){

    do {
        if (a.toLowerCase() === "rock"){
            return "Rock";
        }else if(a.toLowerCase() === "paper"){
            return "Paper";
        }else if(a.toLowerCase() === "scissors"){
            return "Scissors";
        }else{
            console.log("Enter proper number");
        }
    }while(!(a.toLowerCase() === "rock"||"paper"||"scissors"));   
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == "Rock") {
        if(computerChoice == "Rock"){
            console.log("The Round is a Tie!!");
            return "tie";
        } 
        else if (computerChoice == "Paper") {
            console.log("Computer Wins the Round!!");
            return "Computer";
        }
        else{
            console.log("Human Wins the Round!!");
            return "Human";
        }
    }

    if (humanChoice == "Paper") {
        if(computerChoice == "Rock"){
            console.log("Human Wins the Round!!");
            return "Human";
        } 
        else if (computerChoice == "Paper") {
            console.log("The Round is a Tie!!");
            return "tie";
        }
        else{
            console.log("Computer Wins the Round!!");
            return "Computer";
        }
    }

    if (humanChoice == "Scissors") {
        if(computerChoice == "Rock"){
            console.log("Computer Wins the Round!!");
            return "Computer";
        } 
        else if (computerChoice == "Paper") {
            console.log("Human Wins the Round!!");
            return "Human";
        }
        else{
            console.log("The Round is a Tie!!");
            return "tie";
        }
    }
}

let round = 1;
let human = 0;
let computer = 0;

while (round<=5){
    console.log("This is the" +round);
    let k = prompt("Rock,Paper,Scissors","--Rock--");
    let n = playRound(getHumanChoice(k),getComputerChoice());
    
    if(n === "Human") human++;
    else if(n === "Computer") computer++;
    console.log(`Human :${human} :: Computer:${computer}`);
    round++;
}
