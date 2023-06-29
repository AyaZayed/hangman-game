import React from 'react'

export default function Wrong({ wrongLetters }) {
    return (
        <div className="wrong-letters-container">
            <div id="wrong-letters">
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    )
}
