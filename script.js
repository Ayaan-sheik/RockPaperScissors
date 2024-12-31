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
