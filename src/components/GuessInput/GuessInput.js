import React from "react";

function GuessInput({ guess, setGuess }) {
  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log({ guess });
      setGuess("");
    },
    [guess, setGuess]
  );

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
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
