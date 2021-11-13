import React, { useState } from 'react'


const Display =({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)


const App = () => {
  const [ counter, setCounter ] = useState(0);

  const increaseByOne = () => setCounter(counter +1);

  const setToZero = ()  => setCounter(0)

  const decreaseByOne = () => setCounter(counter -1);

  return (
    <>
    <Display counter={counter}/>
    <Button text="plus" onClick={increaseByOne}>plus</Button>
    <Button text="reset" onClick={setToZero}
    >reset</Button>
    <Button onClick={decreaseByOne} text="minus"
    >minus</Button>
    </>
  )
}

export default App


