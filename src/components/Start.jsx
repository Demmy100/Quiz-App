import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizHolder'

const Start = () => {
    const {setStart} = useContext(QuizContext)

    const laterHandler = () => {
        alert("coming soon")
    }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='sm:w-[40%] w-[100%] h-[300px] rounded-md shadow-md bg-slate-700 flex flex-col items-center justify-center px-8'>
        <h1 className='text-white text-5xl font-bold uppercase'>Quiz App</h1>
        <div className='w-full'>
            <button className='w-full p-2 bg-green-400 text-white rounded-lg mt-4' onClick={() => setStart(true)}>Play</button>
        </div>
        <div className='w-full flex items-center gap-8 mt-6'>
            <button className='w-full p-1 bg-red-600 text-white rounded-lg' onClick={laterHandler}>Login</button>
            <button className='w-full p-1 bg-blue-400 text-white rounded-lg' onClick={laterHandler}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Start
