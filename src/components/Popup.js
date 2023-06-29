import React from 'react'

export default function Popup({ word, wrongLetters, playAgain }) {
    return (
        <div class="popup-container" id="popup-container">
            <div class="popup">
                <h2 id="final-message">
                    {wrongLetters.length >= 6 ? 'Unfortunately you lost.' : 'Congratulations! You won.'}
                </h2>
                <h3 id="final-message-reveal-word">...the word was: {word}</h3>
                <button id="play-button" onClick={() => playAgain()}>Play Again</button>
            </div>
        </div>
    )
}
