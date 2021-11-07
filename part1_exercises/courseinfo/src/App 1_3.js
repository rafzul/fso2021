import React from 'react'

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Content = ({course}) => {
  const [part1, part2, part3] = course
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

function Total({ course }) {
  let total = course[0].exercises + course[1].exercises + course[2].exercises;
  return (
    <>
    <p>Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
      name : 'Fundamentals of React',
      exercises : 10
    }
  const part2 = {
      name : 'Using props to pass data to React',
      exercises : 7
    }
  const part3 = {
      name : 'State of a component',
      exercises : 14
    }

  return (
    <div>
      <Header course={course} />
      <Content course={[part1, part2, part3]} />
      <Total course={[part1, part2, part3]}/>
    </div>
  )

}

export default App;
