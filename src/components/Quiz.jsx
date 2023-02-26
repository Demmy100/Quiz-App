import React, { useState } from 'react'
import QuizContainer from './QuizContainer'

const Quiz = () => {
    const [current, setCurrent] = useState(0)
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <QuizContainer current={current} next={setCurrent}/>
    </div>
  )
}

export default Quiz
