import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizHolder'

const Result = () => {
    const {quiz, correct, setStart, setExit, setCorrect} = useContext(QuizContext)
    const playAgain = () => {
        setExit(false)
        setStart(false)
        setCorrect(0)
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='sm:w-[30%] w-[100%] h-[200px] p-3 bg-slate-700 text-white rounded-md flex items-center justify-center flex-col'>
        <div>{correct} out of {quiz.length} are correct</div>
        <div>
            <button className='mt-2 bg-green-400 text-white rounded px-3' onClick={playAgain}>Retry</button>
        </div>
      </div>
    </div>
  )
}

export default Result
