import React from "react";

function GuessInput({ onSubmit, disabled }) {
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
        disabled={disabled}
        value={guess}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
