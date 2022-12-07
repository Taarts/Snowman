import React, { useState, useEffect } from 'react'
import words from './words.json'

import step_0 from './images/step_0.png'
import step_1 from './images/step_1.png'
import step_2 from './images/step_2.png'
import step_3 from './images/step_3.png'
import step_4 from './images/step_4.png'
import step_5 from './images/step_5.png'
import step_6 from './images/step_6.png'
import step_7 from './images/step_7.png'

const ALPHABET = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)) // A-Z
const randomWordLocal = words[Math.floor(Math.random() * words.length)]

export function App() {
  const [secretWord, setSecretWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [playerScore, setPlayerScore] = useState(0)
  const [currentWord, setCurrentWord] = useState(['_'])

  function game() {
    setSecretWord(randomWordLocal.toUpperCase())
    console.log(secretWord) //take out
  }

  function newGame() {
    setGuessedLetters([''])
    setPlayerScore(0)
    setCurrentWord(['_'])
    game()
  }

  function clickOnLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter])
    console.log(letter) //take out

    if (secretWord.includes(letter)) {
      console.log('correct')
      setPlayerScore(playerScore + 1)

      for (let index = 0; index < secretWord.length; index++) {}

      setPlayerScore(playerScore + 1)
    }
  }

  function buildSnowman() {
    switch (playerScore) {
      case 0:
        return step_0
      case 1:
        return step_1
      case 2:
        return step_2
      case 3:
        return step_3
      case 4:
        return step_4
      case 5:
        return step_5
      case 6:
        return step_6
      case 7:
        return step_7
    }
  }

  return (
    <div>
      <header>
        <h1>Let's Build a Snowman!</h1>
        <button onClick={() => newGame()}>START</button>
      </header>
      <section>
        <img className="image" src={buildSnowman()} height="300px" />
      </section>
      <ul>
        {secretWord.split('').map((letter, index) => (
          <li key={index}>{guessedLetters.includes(letter) ? letter : '_'}</li>
        ))}
      </ul>
      <section>
        {ALPHABET.map((letter) => {
          return (
            <button
              key={letter}
              onClick={function () {
                clickOnLetter(letter)
              }}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          )
        })}
      </section>
      <section>
        <div></div>
      </section>
      <footer>by me</footer>
    </div>
  )
}
