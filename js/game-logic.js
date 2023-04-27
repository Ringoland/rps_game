// Global variables for move types and values.
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;
let playerOneWins = 0;
let playerTwoWins = 0;
let ties = 0;

//Set player moves and values.
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    //assigns values to variables for each type and values
    if (player === "Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
        //return playerOneMoveOneType;

    } else if (player == "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
        //return playerTwoMoveThreeValue;

    } else {
        return undefined;
    }

}
//testing setPlayersMoves -  Passed
//console.log(setPlayerMoves("tito", "rock", 30, "scissors", 20, "paper", 50));

const getRoundWinner = (roundNumber) => {
    //
    switch(roundNumber){
        case 1:
            if (playerOneMoveOneType === playerTwoMoveOneType) {
                if (playerOneMoveOneValue === playerTwoMoveOneValue){
                    return "Tie";
                } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return "Player One";
                } else {
                    return "Player Two";
                }

            } else if (playerOneMoveOneType==="scissors" && playerTwoMoveOneType==="paper") {
                return "Player One";
            } else if (playerOneMoveOneType==="scissors" && playerTwoMoveOneType==="rock") {
                return "Player Two";
            } else if (playerOneMoveOneType==="rock" && playerTwoMoveOneType==="scissors") {
                return "Player One";
            } else if (playerOneMoveOneType==="rock" && playerTwoMoveOneType==="paper") {
                return "Player Two";
            } else if (playerOneMoveOneType==="paper" && playerTwoMoveOneType==="rock"){
                return "Player One";
            } else if (playerOneMoveOneType==="paper" && playerTwoMoveOneType==="scissors"){
                return "Player Two";
            }
        
        case 2:
            //
            if (playerOneMoveTwoType === playerTwoMoveTwoType) {
                if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
                    return "Tie";
                } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                    return "Player One";
                } else {
                    return "Player Two";
                }

            } else if (playerOneMoveTwoType==="scissors" && playerTwoMoveTwoType==="paper") {
                return "Player One";
            } else if (playerOneMoveTwoType==="scissors" && playerTwoMoveTwoType==="rock") {
                return "Player Two";
            } else if (playerOneMoveTwoType==="rock" && playerTwoMoveTwoType==="scissors") {
                return "Player One";
            } else if (playerOneMoveTwoType==="rock" && playerTwoMoveTwoType==="paper") {
                return "Player Two";
            } else if (playerOneMoveTwoType==="paper" && playerTwoMoveTwoType==="rock"){
                return "Player One";
            } else if (playerOneMoveTwoType==="paper" && playerTwoMoveTwoType==="scissors"){
                return "Player Two";
            }
        
            case 3:
                //
                if (playerOneMoveThreeType === playerTwoMoveThreeType) {
                    if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
                        return "Tie";
                    } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                        return "Player One";
                    } else {
                        return "Player Two";
                    }
    
                } else if (playerOneMoveThreeType==="scissors" && playerTwoMoveThreeType==="paper") {
                    return "Player One";
                } else if (playerOneMoveThreeType==="scissors" && playerTwoMoveThreeType==="rock") {
                    return "Player Two";
                } else if (playerOneMoveThreeType==="rock" && playerTwoMoveThreeType==="scissors") {
                    return "Player One";
                } else if (playerOneMoveThreeType==="rock" && playerTwoMoveThreeType==="paper") {
                    return "Player Two";
                } else if (playerOneMoveThreeType==="paper" && playerTwoMoveThreeType==="rock"){
                    return "Player One";
                } else if (playerOneMoveThreeType==="paper" && playerTwoMoveThreeType==="scissors"){
                    return "Player Two";
                }

            }
        
}


//Test for round 2 - Passed
/*
playerOneMoveThreeType = "scissors";
playerTwoMoveThreeType = "paper";
playerOneMoveThreeValue = 220;
playerTwoMoveThreeValue = 221;
console.log(getRoundWinner(3));
*/


const getGameWinner = () => {
    if (getRoundWinner(1)==="Player One") {
        playerOneWins += 1;

    } else if (getRoundWinner(1)==="Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(1)==="Tie") {
        ties += 1;
    }

    if (getRoundWinner(2)==="Player One") {
        playerOneWins += 1;
    } else if (getRoundWinner(2)==="Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(2)==="Tie"){
        ties += 1;
    }

    if (getRoundWinner(3)==="Player One") {
        playerOneWins += 1;
    } else if (getRoundWinner(3)==="Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(3)==="Tie"){
        ties += 1;
    }

    if (playerOneWins > playerTwoWins) {
        return "Player One Wins!!";

    } else if (playerOneWins < playerTwoWins) {
        return "Player Two Wins!!";

    } else if (playerOneWins === playerTwoWins) {
        return "Game is tied";
    }
}

/*Test for Game - Passed

playerOneMoveOneType = "rock";
playerTwoMoveOneType = "rock";
playerOneMoveOneValue = 12;
playerTwoMoveOneValue = 12;

playerOneMoveTwoType = "rock";
playerTwoMoveTwoType = "paper";
playerOneMoveTwoValue = 12;
playerTwoMoveTwoValue = 87;

playerOneMoveThreeType = "paper";
playerTwoMoveThreeType = "rock";
playerOneMoveThreeValue = 21;
playerTwoMoveThreeValue = 65;

console.log(getGameWinner());

*/

const setComputerMoves = () => {
    //
    let randomMove;
    let remaningPoints;
    //playerTwoMoveOneValue = 1;
    //playerTwoMoveTwoValue = 1;
    //playerTwoMoveThreeValue = 1;

    //Move one
    randomMove = Math.floor((Math.random()*3)) + 1;
    //console.log(randomMove);

    switch(randomMove){
        case 1:
            playerTwoMoveOneType = "rock";
            break;
        case 2:
            playerTwoMoveOneType = "paper";
            break;
        case 3:
            playerTwoMoveOneType = "scissors";
            break;
    }

    playerTwoMoveOneValue = Math.floor(Math.random()*97) + 1;
    remaningPoints = 99 - playerTwoMoveOneValue;
    //console.log(randomMove);
    //console.log(playerTwoMoveOneValue);
    //console.log(remaningPoints);
    //return remaningPoints;

    //Move two
    randomMove = Math.floor(Math.random()*3) + 1;
    switch(randomMove){
        case 1:
            playerTwoMoveTwoType = "rock";
            break;
        case 2:
            playerTwoMoveTwoType = "paper";
            break;
        case 3:
            playerTwoMoveTwoType = "scissors";
            break;
    }
    playerTwoMoveTwoValue = Math.floor(Math.random()*remaningPoints) + 1;
    remaningPoints = remaningPoints - playerTwoMoveTwoValue;
    //console.log(playerTwoMoveTwoValue);
    //return remaningPoints;

    //Move three
    randomMove = Math.floor(Math.random()*3) + 1;
    //console.log(randomMove);

    switch(randomMove){
        case 1:
            playerTwoMoveThreeType = "rock";
            break;
        case 2:
            playerTwoMoveThreeType = "paper";
            break;
        case 3:
            playerTwoMoveThreeType = "scissors";
            break;
    }
    playerTwoMoveThreeValue = remaningPoints;

    console.log(playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType);
    console.log(playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue);

    
    return playerTwoMoveThreeValue;


    //case 1: set move to some type. case 2: other type, case 3: other type
    //set random value 1-99 // 99 - random = new limit
    
    //get random num 1-3
    //case 1: set move to some type. case 2: other type, case 3: other type
    //set random value 1-99 // 99 - random = new limit

    //get random num 1-3
    //case 1: set move to some type. case 2: other type, case 3: other type
    //set random value 1-99 // 99 - random = new limit
}

console.log(setComputerMoves());