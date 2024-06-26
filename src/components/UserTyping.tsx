import classNames from "classnames";
import Caret from "./Caret";

const UserTyping = ({
  userInput,
  className,
  words,
}: {
  userInput: string;
  className?: string;
  words: string;
}) => {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
};

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const normalizeChar = (char: string) => {
    if (char === "i") return "ı";
    if (char === "I") return "İ";
    return char;
  };

  const isCorrect = normalizeChar(actual) === normalizeChar(expected);
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={classNames({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTyping;
