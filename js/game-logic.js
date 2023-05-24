// Global variables for move types and values.
let playerOneMoveOneType,
    playerOneMoveOneValue,
    playerOneMoveTwoType,
    playerOneMoveTwoValue,
    playerOneMoveThreeType,
    playerOneMoveThreeValue,
    playerTwoMoveOneType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoType,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeType,
    playerTwoMoveThreeValue;

//Set player moves and values.
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!moveOneType || !moveTwoType || !moveThreeType) {
        return;
    }

    if ((moveOneType != "rock" && moveOneType != "paper" && moveOneType != "scissors") || (moveTwoType != "rock" && moveTwoType != "paper" && moveTwoType != "scissors") || (moveThreeType != "rock" && moveThreeType != "paper" && moveThreeType != "scissors")) {
        return;
    }

    if (!moveOneValue || moveOneValue < 1 || moveOneValue > 97 || !moveTwoValue || moveTwoValue < 1 || moveTwoValue > 97 || !moveThreeValue || moveThreeValue < 1 || moveThreeValue > 97) {
        return;
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }

    //you can remove move type checks, since already passed the top.
    if (player === "Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;

    } else if (player == "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;

    } else {
        return;
    }

}
//testing setPlayersMoves -  Passed
//console.log(setPlayerMoves("tito", "rock", 30, "scissors", 20, "paper", 50));

const getRoundWinner = (roundNumber) => {
    switch(roundNumber){
        case 1:
            if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType || !playerTwoMoveOneValue) {
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
            if (!playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue) {
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
            if (!playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
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
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }
    playerOneWins = 0; // it sets the value of player 1 wins back to zero every time you use the function
    playerTwoWins = 0; // it sets the value of player 2 wins back to zero every time you use the function


    if (getRoundWinner(1) === "Player One") {
        playerOneWins = (playerOneWins + 1);
    } else if (getRoundWinner(1) === "Player Two") {
        playerTwoWins = (playerTwoWins +1);
    }

    if (getRoundWinner(2) === "Player One") {
        playerOneWins = (playerOneWins + 1);
    } else if (getRoundWinner(2) === "Player Two") {
        playerTwoWins = (playerTwoWins +1);
    }

    if (getRoundWinner(3) === "Player One") {
        playerOneWins = (playerOneWins + 1);
    } else if (getRoundWinner(3) === "Player Two") {
        playerTwoWins = (playerTwoWins +1);
    }

    if (playerOneWins > playerTwoWins) {
        return "Player One";
    } else if (playerOneWins < playerTwoWins) {
        return "Player Two";
    } else {
        return 'Tie';
    }
}

/*Test for Game - Passed

playerOneMoveOneType = 'paper';
playerOneMoveOneValue = 1;
playerTwoMoveOneType = 'rock';
playerTwoMoveOneValue = 1; // player 1 wins

playerOneMoveTwoType = 'scissors';
playerOneMoveTwoValue = 1;
playerTwoMoveTwoType = 'scissors';
playerTwoMoveTwoValue = 97; //player 2 wins

playerOneMoveThreeType = 'paper';
playerOneMoveThreeValue = 88;
playerTwoMoveThreeType = 'scissors';
playerTwoMoveThreeValue = 1; //player 2 wins
*/

const setComputerMoves = () => {

    const moves = ["rock", "paper", "scissors"];

    moveOneType = moves[Math.floor(Math.random()*3)];
    moveTwoType = moves[Math.floor(Math.random()*3)];
    moveThreeType = moves[Math.floor(Math.random()*3)];

    moveOneValue = Math.floor(Math.random()*96) + 1;
    moveTwoValue = Math.floor(Math.random()*(97 - moveOneValue)) + 1;
    moveThreeValue = 99 - (moveOneValue + moveTwoValue);

    setPlayerMoves("Player Two", moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
    return [playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue]
}