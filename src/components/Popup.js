import React, { useEffect, useState } from 'react'

export default function Popup({ word, guessedLetters, playAgain, wrongLetters }) {
    const [win, setWin] = useState(false)
    useEffect(() => {
        if (word) {
            const wordLetters = word.split('')
            const win = wordLetters.every(letter => guessedLetters.includes(letter))
            setWin(win)
        }
    }, [word, guessedLetters])

    return (
        <div className="popup-container" id="popup-container"
            style={{ display: win || wrongLetters.length >= 6 ? 'flex' : 'none' }}>
            <div className="popup">
                <h2 id="final-message">
                    {win ? 'Congratulations! You won! 🥳' : 'Unfortunately you lost. 😕'}
                </h2>
                <h3 id="final-message-reveal-word">...the word was: {word}</h3>
                <button id="play-button" onClick={() => playAgain()}>Play Again</button>
            </div>
        </div >
    )
}
