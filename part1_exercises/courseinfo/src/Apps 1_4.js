import React from 'react'

const Header = ({props}) => (
  <h1>{props}</h1>
)

const Content = ({props}) => {
  const [part1, part2, part3] = props
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

function Total({ props }) {
  let total = props[0].exercises + props[1].exercises + props[2].exercises;
  return (
    <>
    <p>Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
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

  return (
    <div>
      <Header props={course} />
      <Content props={parts} />
      <Total props={parts}/>
    </div>
  )

}

export default App;
