import { createContext, useContext, useState } from 'react'
import Nav from './Nav'

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false)

  return(
    <Context.Provider value={[signedIn, setSignedIn]}>
    <Nav />
    <h1>{signedIn? "Signed In" : "Signed Out"}</h1>
    </Context.Provider>
  )
}

export default App
