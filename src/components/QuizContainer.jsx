import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizHolder'

const QuizContainer = ({current, next}) => {
    const [ans, setAns] = useState("")
    const {quiz, correct, setCorrect, setExit} = useContext(QuizContext)
    const nextHandler = () => {
        if(quiz[current].correct === ans ) {
            setCorrect(correct + 1)
        }
        setAns("")
        if((current + 1) === quiz.length){
            setExit(true)
        } else {
            next(current + 1)
        }
    }

   /*  const prevHandler = () => {
        if(quiz[current].correct === ans) {
            setCorrect(correct + 1)
        }
        setAns("")
        if((current + 1)  > 1) {
            prev(current - 1)
            setCorrect(correct)
        }else {
            setCorrect(correct)
        }
    } */
  return (
    <div className='sm:w-[30%] w-[100%] bg-slate-700 rounded-md p-3'>
      <div className='flex items-center justify-between text-white text-[16px]'>
        <div>Question</div>
        <div>{current + 1} of {quiz.length}</div>
      </div>
      <div>
        <h1 className='text-white font-bold text-[18px]'>{quiz[current].question}</h1>
        <div className='grid grid-cols-2 gap-4 my-4'>
            <button className={`${ans === "a" ? "bg-blue-500 text-white" : ""} hover:bg-blue-400 hover:text-white text-white border border-gray`} onClick={() => setAns("a")}>{quiz[current].a}</button>
            <button className={`${ans === "b" ? "bg-blue-500 text-white" : ""}hover:bg-blue-400 hover:text-white text-white  border border-gray`} onClick={() => setAns("b")}>{quiz[current].b}</button>
            <button className={`${ans === "c" ? "bg-blue-500 text-white" : ""}hover:bg-blue-400 hover:text-white text-white border border-gray`} onClick={() => setAns("c")}>{quiz[current].c}</button>
            <button className={`${ans === "d" ? "bg-blue-500 text-white" : ""}hover:bg-blue-400 hover:text-white text-white  border border-gray`} onClick={() => setAns("d")}>{quiz[current].d}</button>
        </div>
      </div>
      <div className='flex text-right items-center justify-end mt-2'>
       {/*  <button className='px-2 bg-red-400 text-white rounded' onClick={prevHandler}>Prev</button> */}
        <button className='px-2 bg-green-400 text-white rounded' onClick={nextHandler}>Next</button>
      </div>
    </div>
  )
}

export default QuizContainer
