// All code should be written in this file.
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

// The method signature for this function should be as follows: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    //create failfast return if values not provided
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

//Create helper function 'isValidMoveType()' with parameter 'moveType' to validate value of rock paper or scissors
function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

//create helper function for the value too

function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <=99);
}

function getRoundWinner(roundNumber) {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default: 
        return null;
    };

}

function getMoveWinner (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
        if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
            return null;
        }

        if (playerOneMoveType === playerTwoMoveType) {
            if (playerOneMoveValue > playerTwoMoveValue) {
                return 'Player One';
            } else if (playerOneMoveValue < playerTwoMoveValue) {
                return 'Player Two';
            } else {
                return 'Tie';
            }
        }

        if (playerOneMoveType === 'rock') {
            if (playerTwoMoveType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            } 
        } else if (playerOneMoveType === 'paper') {
            if (playerTwoMoveType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            if (playerTwoMoveType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        }


}