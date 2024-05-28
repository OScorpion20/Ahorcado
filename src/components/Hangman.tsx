import React, { useState, useEffect } from 'react';

interface HangmanProps {
  words: string[];
  hints: { [word: string]: string };
}

const Hangman = ({ words, hints }: HangmanProps) => {
  const [selectedWord, setSelectedWord] = useState<string>(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  useEffect(() => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setErrorCount(0);
    setTimeElapsed(0); 
  }, [words]);

  useEffect(() => {
  
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const displayWord = selectedWord.split('').map((letter, index) => {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return '_';
    }
  });

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  const restartGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setErrorCount(0);
    setTimeElapsed(0); 
  };

 
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div>
      <p>{displayWord.join(' ')}</p>
      <p>Hint: {hints[selectedWord]}</p>
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
      <div>
        <p>Time Elapsed: {formatTime(timeElapsed)}</p>
        <p>Error count: {errorCount}</p>
      </div>
      {(displayWord.join('') === selectedWord || errorCount > 5) && (
        <button onClick={restartGame}>Select New Word</button>
      )}
      {displayWord.join('') === selectedWord && (
        <p>You won in this round</p>
      )}
    </div>
  );
};

export default Hangman;
