import React from 'react'
import Lottie from "lottie-react"
import hupit from "./83685-hubit.json"

const Header = ({props}) => (
  <h1>{props.name}</h1>
)

const Content = ({props}) => {
  const [part1, part2, part3] = props['parts']
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part3.exercises}/>
    </div>
      // <>
      // <p>{part1.name} {part1.exercises}</p>
      // <p>{part2.name} {part2.exercises}</p>
      // <p>{part3.name} {part2.exercises}</p>
      // </>
    )
}

const Part = function({ part, exercise }) {
  return (
    <>
      <p>{part} {exercise}</p>
    </>
  )
}

const LottieFiles = () => {
  return <Lottie animationData={hupit} />
}

function Total({ props }) {
  //solution 1
  // let total = props['parts'][0]['exercises'] + props['parts'][1]['exercises'] + props['parts'][2]['exercises']
  //solution 2
  const n = props['parts'].map(n => n.exercises)
  let total = n.reduce((a,b) => (a+b))
  //function classic
  // let total = n.reduce(
  //   function (a, b) {
  //     return a + b
  // })
  return (
    <>
    <p>Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data to React',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]
}

  return (
    <div>
      <Header props={course} />
      <Content props={course} />
      <Total props={course} />
      <LottieFiles />
    </div>
  )

}

export default App;
