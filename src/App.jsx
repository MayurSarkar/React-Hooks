import React, {useState, useMemo} from 'react'

function App() {
  const [number, setNumber] = useState(1)
  const [val, setVal] = useState(1)
  const [double, setDouble] = useState(1)

  const getDouble = useMemo(() => slowFunction(val), [val])
  //const getDouble = slowFunction(val)
  return (
    <>
    <h1>Add Number</h1>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number+1)}>
      add number
    </button>

    <h1>Get Double</h1>
    <h1>{val}</h1>
    <button onClick={() => setVal(val+1)}>
      add Double
    </button>

    <h1>Get Double</h1>
    <h1>{double}</h1>
    <button onClick={() => setDouble(getDouble)}>Get Double</button>
    </>
  )
}

function slowFunction(number){
  console.log('slow function called')

  for(let i=0;i<10000000;i++){}
  const double = number*2

  return double
}

export default App