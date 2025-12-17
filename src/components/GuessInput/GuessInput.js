import React from "react";

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = React.useState("");

  const handleGuessSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(guess);
      setGuess("");
    },
    [guess, setGuess, onSubmit]
  );

  return (
    <form onSubmit={handleGuessSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        pattern="\w{5,5}"
        maxLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
