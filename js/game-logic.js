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
    const movesValues = moveOneValue + moveTwoValue + moveThreeValue;

    if (moveOneType == null || moveTwoType == null || moveThreeType == null || (moveOneType != "rock" && moveOneType != "paper" && moveOneType != "scissors") || (moveTwoType != "rock" && moveTwoType != "paper" && moveTwoType != "scissors") || (moveThreeType != "rock" && moveThreeType != "paper" && moveThreeType != "scissors")) {
        return undefined;
    }

    if (moveOneValue == null || moveOneValue < 1 || moveOneValue > 97 || moveTwoValue == null || moveTwoValue < 1 || moveTwoValue > 97 || moveThreeValue == null || moveThreeValue < 1 || moveThreeValue > 97) {
        return undefined;
    }

    if (movesValues > 99) {
        return undefined;
    }


    if (player === "Player One") {
        if (moveOneType === "rock"|| moveOneType==="paper" || moveOneType==="scissors") {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;

        } else {
            return undefined;
        }

        if (moveTwoType === "rock"|| moveTwoType==="paper" || moveTwoType==="scissors") {
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;

        } else {
            return undefined;
        }

        if (moveThreeType === "rock"|| moveThreeType==="paper" || moveThreeType==="scissors") {
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;

        } else {
            return undefined;
        }





    } else if (player == "Player Two") {
        
        if (moveOneType == "rock"|| moveOneType == "paper" || moveOneType == "scissors") {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;

        } else {
            return undefined;
        }

        if (moveTwoType == "rock"|| moveTwoType == "paper" || moveTwoType == "scissors") {
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;

        } else {
            return undefined;
        }

        if (moveThreeType == "rock"|| moveThreeType == "paper" || moveThreeType == "scissors") {
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;

        } else {
            return undefined;
        }



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
            if (playerOneMoveOneType==undefined || playerOneMoveOneValue==undefined || playerTwoMoveOneType==undefined || playerTwoMoveOneValue==undefined) {
                return null;
            }

            if (playerOneMoveOneType == playerTwoMoveOneType) {
                if (playerOneMoveOneValue == playerTwoMoveOneValue){
                    return "Tie";
                } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return "Player One";
                } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
                    return "Player Two";
                }

            } else if (playerOneMoveOneType == "scissors" && playerTwoMoveOneType == "paper") {
                return "Player One";
            } else if (playerOneMoveOneType == "scissors" && playerTwoMoveOneType == "rock") {
                return "Player Two";
            } else if (playerOneMoveOneType == "rock" && playerTwoMoveOneType == "scissors") {
                return "Player One";
            } else if (playerOneMoveOneType == "rock" && playerTwoMoveOneType == "paper") {
                return "Player Two";
            } else if (playerOneMoveOneType == "paper" && playerTwoMoveOneType == "rock"){
                return "Player One";
            } else if (playerOneMoveOneType == "paper" && playerTwoMoveOneType == "scissors"){
                return "Player Two";
            }
        
        case 2:
            //
            if (playerOneMoveTwoType==undefined || playerOneMoveTwoValue==undefined || playerTwoMoveTwoType==undefined || playerTwoMoveTwoValue==undefined) {
                return null;
            }
            if (playerOneMoveTwoType == playerTwoMoveTwoType) {
                if (playerOneMoveTwoValue == playerTwoMoveTwoValue){
                    return "Tie";
                } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                    return "Player One";
                } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
                    return "Player Two";
                }

            } else if (playerOneMoveTwoType == "scissors" && playerTwoMoveTwoType == "paper") {
                return "Player One";
            } else if (playerOneMoveTwoType == "scissors" && playerTwoMoveTwoType == "rock") {
                return "Player Two";
            } else if (playerOneMoveTwoType == "rock" && playerTwoMoveTwoType == "scissors") {
                return "Player One";
            } else if (playerOneMoveTwoType == "rock" && playerTwoMoveTwoType == "paper") {
                return "Player Two";
            } else if (playerOneMoveTwoType == "paper" && playerTwoMoveTwoType == "rock"){
                return "Player One";
            } else if (playerOneMoveTwoType == "paper" && playerTwoMoveTwoType == "scissors"){
                return "Player Two";
            }
        
        case 3:
            if (playerOneMoveThreeType==undefined || playerOneMoveThreeValue==undefined || playerTwoMoveThreeType==undefined || playerTwoMoveThreeValue==undefined) {
                return null;
            }
            
            if (playerOneMoveThreeType == playerTwoMoveThreeType) {
                if (playerOneMoveThreeValue == playerTwoMoveThreeValue){
                    return "Tie";
                } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                    return "Player One";
                } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
                    return "Player Two";
                }
    
            } else if (playerOneMoveThreeType == "scissors" && playerTwoMoveThreeType == "paper") {
                return "Player One";
            } else if (playerOneMoveThreeType == "scissors" && playerTwoMoveThreeType == "rock") {
                return "Player Two";
            } else if (playerOneMoveThreeType == "rock" && playerTwoMoveThreeType == "scissors") {
                return "Player One";
            } else if (playerOneMoveThreeType == "rock" && playerTwoMoveThreeType == "paper") {
                return "Player Two";
            } else if (playerOneMoveThreeType == "paper" && playerTwoMoveThreeType == "rock"){
                return "Player One";
            } else if (playerOneMoveThreeType == "paper" && playerTwoMoveThreeType == "scissors"){
                return "Player Two";
            }
            
        default:
            return null;

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
    if (getRoundWinner(1) == "Player One") {
        playerOneWins += 1;

    } else if (getRoundWinner(1) == "Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(1) == "Tie") {
        ties += 1;
    }

    if (getRoundWinner(2) == "Player One") {
        playerOneWins += 1;
    } else if (getRoundWinner(2) == "Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(2) == "Tie"){
        ties += 1;
    }

    if (getRoundWinner(3) == "Player One") {
        playerOneWins += 1;
    } else if (getRoundWinner(3) == "Player Two") {
        playerTwoWins += 1;
    } else if (getRoundWinner(3) == "Tie"){
        ties += 1;
    }

    //console.log(playerOneWins, playerTwoWins, ties);

    if (playerOneWins == playerTwoWins) {
        return "Tie";

    } else if (playerTwoWins >  playerOneWins) {
        return "Player Two";

    } else if (playerOneWins > playerTwoWins) {
        return "Player One";
    }
}

/*Test for Game - Passed

playerOneMoveOneType = 'rock';
playerOneMoveOneValue = 1;
playerTwoMoveOneType = 'rock';
playerTwoMoveOneValue = 53;
playerOneMoveTwoType = 'rock';
playerOneMoveTwoValue = 97;
playerTwoMoveTwoType = 'paper';
playerTwoMoveTwoValue = 1;
playerOneMoveThreeType = 'rock';
playerOneMoveThreeValue = 1;
playerTwoMoveThreeType = 'scissors';
playerTwoMoveThreeValue = 45;

console.log(getGameWinner());

*/

const setComputerMoves = () => {
    //
    let randomMove;
    let remaningPoints;

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

    return [playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue];

}

// Returns random moves and values for computer playing player 2. - PASSED
//console.log(setComputerMoves());