"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../Placeholder-vanish/Placeholder-vanish";

export function TryToGuess() {
  const placeholders = ["Guess Who Made this?"];
  const [tryGuess, setTryGuess] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTryGuess((prev) => prev + 1);
    if (text === "shalex") {
      setCorrect(true);
    }
  };

  return (
    <div className='h-[40rem] flex flex-col justify-center  items-center px-4'>
      <h2 className='mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black'>
        Try to guess!
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      {tryGuess > 0 && correct === true && (
        <h1 className='text-2xl text-green-500'>
          You got me, yeah this is me shalex!
        </h1>
      )}
      {tryGuess > 0 && correct === false && (
        <h1 className='text-2xl text-green-500'>
          You got it wrong, try again!
        </h1>
      )}
    </div>
  );
}
