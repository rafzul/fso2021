import React from 'react'

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Content = ({course}) => {
  return (
    <div>
      <Part part={course.part1.name} exercise={course.part1.exercises}/>
      <Part part={course.part2.name} exercise={course.part2.exercises}/>
      <Part part={course.part3.name} exercise={course.part3.exercises}/>
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

function Total({course}) {
  let total = course['part1']['exercises'] + course['part2']['exercises'] + course['part3']['exercises'];
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
      <Content course={ {part1: part1, part2: part2, part3: part3} }/>
      <Total course= { {part1: part1, part2: part2, part3: part3} }/>
    </div>
  )

}

export default App;
