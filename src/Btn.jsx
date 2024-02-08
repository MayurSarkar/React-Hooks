import React, {useState, useContext} from 'react'
import { Context } from './App'

function Btn() {

    const [signedIn, setSignedIn] = useContext(Context)
  return (
    <div><button onClick={() => setSignedIn(!signedIn)}>
        {signedIn?'Sign Out':'Sign In'}
        </button></div>
  )
}

export default Btn