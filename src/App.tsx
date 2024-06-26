import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTyping from "./components/UserTyping";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helper";

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
      <Logo />
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTyping
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
      <Closing/>
    </>
  );
};

const Logo = () => {
  return (
    <div className="text-center mt-5 mb-5">
      <h1 className="text-4xl font-bold text-primary-500">
        typeBlitz⚡
      </h1>
    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed mx-auto">{children}</div>
  );
};

const Closing = () => {
  return (
    <div className="text-center mt-10">
      {" "}
      <a
        href="https://github.com/erdemonal11/typeBlitz"
        className="mt-5 mb-5 text-1xl text-primary-500"
      >
        Click to see the Github repo
      </a>
    </div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;