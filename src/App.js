import './css/App.css';
import { useEffect, useState } from 'react';
import Figure from './components/Figure';
import Wrong from './components/Wrong';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

export default function App() {
  const [word, setWord] = useState('')
  const [wrongLetters, setWrongLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [playable, setPlayable] = useState(true)

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')

      .then(res => res.json())
      .then(data => {
        setWord(data[0])
      })
  }, [])

  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (word.includes(letter)) {
          if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter])
          } else {
            // showNotification
            setShowNotification(true)
            setTimeout(() => {
              setShowNotification(false)
            }, 2000)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter])
          } else {
            // showNotification
            setShowNotification(true)
            setTimeout(() => {
              setShowNotification(false)
            }, 2000)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  function playAgain() {
    setPlayable(true)
    setWrongLetters([])
    setGuessedLetters([])
    fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then(res => res.json())
      .then(data => {
        setWord(data[0])
      })
  }

  console.log(word)

  return (
    <>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />

        <div className="wrong-letters-container">
          <Wrong wrongLetters={wrongLetters} />
        </div>

        <Word word={word} guessedLetters={guessedLetters} />
        <Popup word={word} playAgain={playAgain} guessedLetters={guessedLetters} wrongLetters={wrongLetters} />
        {/* if same letter gets pressed twice */}
        {showNotification && <Notification />}
      </div>
    </>
  )
}
