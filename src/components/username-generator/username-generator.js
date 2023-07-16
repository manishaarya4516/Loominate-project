import React from "react";
import { useApplicationContext } from "../../context/app-context";

const UsernameGenerator = () => {
  const { setUsername } = useApplicationContext();

  const adjectives = ["happy", "silly", "lucky", "brave", "clever", "strong"];
  const nouns = ["hector", "bruno", "conquerer", "tiger", "turtle"];
  const numbers = ["123", "456", "789"];

  const generateUsername = () => {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const generatedUsername = randomAdjective + randomNoun + randomNumber;
    setUsername(generatedUsername);
  };

  return (
    <>
      <button onClick={generateUsername}>Refresh</button>
    </>
  );
};

export default UsernameGenerator;
