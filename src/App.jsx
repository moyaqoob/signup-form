/* eslint-disable no-unused-vars */
import { useState } from 'react';
import React from 'react'
import './App.css'
import Signin from './Components/Signin';


function App() {
  const [action,setAction] = useState('SignUp')

  return (
    <>
     <div className='flex flex-col justify-center items-center '>
     <div className='w-3/6 h-full '>
          <Signin/>
        </div>
     </div>
    </>
  )
}

export default App
