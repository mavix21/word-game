import { range } from "../../utils";

function Guess({ guessCheckStatus }) {
  return (
    <p className="guess">
      {range(5).map((num, i) => (
        <span
          key={num}
          className={`cell ${guessCheckStatus?.[i]?.status ?? ""}`.trim()}
        >
          {guessCheckStatus?.[i]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
