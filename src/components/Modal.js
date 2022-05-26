import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Oh No :(</h1>
          <p className="solution">The solution was {solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  )
}
