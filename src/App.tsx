import React, { useState, useEffect } from 'react'

// guessedLetters
// secretWord
// initialBlank
// placedLetters

const ALPHABET = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)) // A-Z

export function App() {
  const [guessedLetters, setGuessedLetters] = useState('')
  const [secretWord, setSecretWord] = useState('')

  async function game() {
    const response = await fetch(
      'https://sdg-words.herokuapp.com/api/words/random'
    )
    if (response.ok) {
      const word = await response.json()
      setSecretWord(word.toUpperCase())
      console.log(word)
    }
  }

  function newGame() {
    game()
  }

  return (
    <div>
      <header>
        <h1>Let's Build a Snowman!</h1>
        <button onClick={() => newGame()}>START</button>
        <section>snowman</section>
        <section>wordToGuess</section>
        <section>Alphabet</section>
        <footer>by me</footer>
      </header>
    </div>
  )
}
