import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState([]);

  const addToGuessHistory = React.useCallback((guess) => {
    setGuessHistory((prev) => [...prev, guess]);
  }, []);

  return (
    <div className="wrapper">
      <div class="game-wrapper">
        <div className="guess-results">
          {range(NUM_OF_GUESSES_ALLOWED).map((n, i) => (
            <Guess key={n} guess={guessHistory[i]} answer={answer} />
          ))}
        </div>
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          onSubmit={addToGuessHistory}
        />
      </div>
    </div>
  );
}

export default Game;
