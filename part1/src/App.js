import React from 'react'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting mf
    </div>
  )
}


const App = () =>  {
  const name = "petex"
  const age = 30


  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="eva" age={27+11}/>
      <Footer />
    </>
  )
}

export default App;
