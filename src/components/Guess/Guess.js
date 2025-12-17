import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = "", answer }) {
  const guessCheckStatus = checkGuess(guess, answer);

  return (
    <p class="guess">
      {range(5).map((num, i) => (
        <span
          key={num}
          class={`cell ${guessCheckStatus?.[i]?.status ?? ""}`.trim()}
        >
          {guessCheckStatus?.[i]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
