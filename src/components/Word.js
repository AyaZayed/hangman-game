import React from 'react'

export default function Word({ word, guessedLetters }) {

    return (
        <div className='word' id='word'>
            {word.split('').map((letter, idx) => {
                return (
                    <span className='letter' key={idx}>
                        {guessedLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}
