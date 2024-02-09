const { whoWon } = require('../RPS.js');
const RPS = require('../RPS.js');

describe("who won", () => {
    
    test("players making the same selection results in a tie.", () => { 
        let winner = whoWon("rock", "rock");
        expect(winner).toBe("TIE!");
    });

    test("player 1 wins with rock against scissors.", () => {
        let winner = whoWon("rock", "scissors");
        expect(winner).toBe("Player 1 wins!");
    });

    test("player 1 wins with paper against rock.", () => {
        let winner = whoWon("paper", "rock");
        expect(winner).toBe("Player 1 wins!");
    });

    test("player 1 wins with scissors against paper.", () => {
        let winner = whoWon("scissors", "paper");
        expect(winner).toBe("Player 1 wins!");
    });

    test("player 2 wins with rock against scissors.", () => {
        let winner = whoWon("scissors", "rock");
        expect(winner).toBe("Player 2 wins!");
    });

    test("player 2 wins with paper against rock.", () => {
        let winner = whoWon("rock", "paper");
        expect(winner).toBe("Player 2 wins!");
    });

    test("player 2 wins with paper against scissors.", () => {
        let winner = whoWon("paper", "scissors");
        expect(winner).toBe("Player 2 wins!");
    });

    test("if invalid input is received from player 1, the game re-runs.", () => {
        let winner = whoWon("dog", "rock");
        expect(winner).toBe("Invalid input from player 1. Try again.");
    })

    test("if invalid input is received from player 2, the game re-runs.", () => {
        let winner = whoWon("rock", "dog");
        expect(winner).toBe("Invalid input from player 2. Try again.");
    })
        
});