import { createContext, useState } from "react"

const QuizContext = createContext()

const quiz = [
    {
        "question": "The winner of 2022 world-cup is?",
        "a": "France",
        "b": "England",
        "c": "Argentina",
        "d": "Morroco",
        "correct": "c"
    },
    {
        "question": "The current highest goal scorer in the English Premier League is?",
        "a": "Saka",
        "b": "Rashford",
        "c": "Dembele",
        "d": "Haaland",
        "correct": "d"
    },
    {
        "question": "Placing two contradictory words side by side to create an effect is labelled as?",
        "a": "Smile",
        "b": "Oxymoron",
        "c": "Metaphor",
        "d": "Paradox",
        "correct": "b"
    },
    {
        "question": "Which of the following languages is statically typed and also a generic programming?",
        "a": "C++",
        "b": "Javascript",
        "c": "Java",
        "d": "Python",
        "correct": "a"
    },
    {
        "question": "Which of the following celebrity is the most followed on instagram?",
        "a": "Messi",
        "b": "Ronaldo",
        "c": "Beyonce",
        "d": "Olamide",
        "correct": "b"
    },
    {
        "question": "The capital of Nigeria is?",
        "a": "Abuja",
        "b": "Lagos",
        "c": "Ibadan",
        "d": "Delta",
        "correct": "a"
    },
    {
        "question": "Which of the following is not a programming language?",
        "a": "HTML",
        "b": "Ruby",
        "c": "PHP",
        "d": "Kotlin",
        "correct": "a"
    },
    {
        "question": "Which of the following is not a keyword in Javascript?",
        "a": "cin",
        "b": "const",
        "c": "switch",
        "d": "class",
        "correct": "a"
    },
    {
        "question": "One of the following is not an example of fundamental data types in c++?",
        "a": "int",
        "b": "float",
        "c": "double",
        "d": "pointer",
        "correct": "d"
    },
    {
        "question": "A poem that tells story and romantic in nature is called?",
        "a": "Ballad",
        "b": "Satire",
        "c": "Dirge",
        "d": "Ode",
        "correct": "a"
    },
];

export default function QuizHolder(props) {
    const [start, setStart] = useState(false)
    const [exit, setExit] = useState(false)
    const [correct, setCorrect] = useState(0)
  return (
    <QuizContext.Provider value={{start, setStart, exit, setExit, correct, setCorrect, quiz}}>
      {props.children}
    </QuizContext.Provider>
  )
}

export {QuizContext};
