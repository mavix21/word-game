import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  const guessCheckStatus = guessHistory.map((guess) =>
    checkGuess(guess, answer)
  );

  const gameWon =
    guessHistory.length > 0 &&
    guessCheckStatus
      .at(-1)
      .every((charStatus) => charStatus.status === "correct");
  const gameLost = !gameWon && guessHistory.length >= 6;
  const gameOver = gameWon || gameLost;

  console.log("game status", { gameOver });

  const addToGuessHistory = React.useCallback((guess) => {
    setGuessHistory((prev) => [...prev, guess]);
  }, []);

  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <div className="guess-results">
          {range(NUM_OF_GUESSES_ALLOWED).map((n, i) => (
            <Guess key={n} guessCheckStatus={guessCheckStatus[i]} />
          ))}
        </div>
        <GuessInput onSubmit={addToGuessHistory} disabled={gameOver} />
        {gameWon && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{guessHistory.length} guesses</strong>.
            </p>
          </div>
        )}
        {gameLost && (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
