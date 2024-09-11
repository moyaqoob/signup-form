/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import React from 'react'
import username from '../assets/username.png'
import password from '../assets/lock.png'
import email from '../assets/email.png'

function Signin() {
    const [action,setAction] = useState('SignIn')
    const [state,setState] = useState("")

   useEffect(()=>{
    setAction(action)
   },[action,state])

   function redirect(){
    window.location.origin = "https://google.com"
   }
  return (
    <>
    <div className="bg-white flex flex-col gap-y-3 ">
      <h1 className="font-sans lowercase font-bold 
      text-2xl text-purple-700 ">{action}</h1>

      <div className='grid grid-rows-5 items-center justify-center space-y-4 gap-3 bg-gray-400 p-5'>
        {action == "SignUp"? <div className="flex items-center bg-red-500 p-2 rounded">
            <img src={username} alt="Username Icon" className="h-5 w-5 mr-2" />
            <input
            type="text"
            placeholder="Name"
            className="p-2 rounded border-none outline-none flex-1"
            />
        </div>:null }
        

     <div className="flex items-center bg-red-500 p-2 rounded">
            <img src={password} alt="Password Icon" className="h-5 w-5 mr-2" />
            <input
            type="text"
            placeholder="Email"
            className="p-2 rounded border-none outline-none flex-1"
            />
     </div>

    <div className="flex items-center bg-red-500 p-2 rounded">
        <img src={email} alt="Email Icon" className="h-5 w-5 mr-2" />
        <input
        type="text"
        placeholder="Password"
        className="p-2 rounded border-none outline-none flex-1"
        />
    </div>
</div>

      <p>Lost password?<span className='text-blue-400 p-2 cursor-pointer' onFocus={()=>{redirect}}>Click here!!  </span></p>

      <div className="flex justify-center gap-x-3 p-2">
        <button className="capitalize bg-fuchsia-800 rounded-lg p-1 cursor-pointer" onFocus={()=>{setAction("SignIn")}}>SignIn</button>
        <button className='capitalize bg-fuchsia-800 rounded-lg p-1 hover:' onClick={()=>{setAction("SignUp")}} >SignUp </button>
      </div>
    </div>
    </>
  )
}
export default Signin
