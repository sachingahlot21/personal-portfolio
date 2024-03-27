import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      {/* MAIN CONTAINER STARTS HERE */}
      <div className='w-[100vw] h-[130vh] bg-[rgb(10,25,47)]'>
        {/* NAVBAR DIV STARTS HERE */}
        <div className='w-[100%] h-[80px] bg-[rgb(10,25,47)] px-24  flex justify-between'>
          <div className='w-[20%] h-[100%]  flex items-center'>
            <h1 className='w-[20%] h-[50%]  font-sans text-4xl text-[rgb(239,209,2)] font-bold'>SG</h1>
          </div>
          <div className='w-[80%] h-[100%]  flex items-center '>
            <div className='w-[80%] h-[100%] m-auto flex items-center '>
              <ul className='flex w-[100%] h-[100%] items-center justify-around font-mono font-semibold '>
                <li className='text-[rgb(148,165,193)] cursor-pointer hover:text-[rgb(239,209,2)]'>About</li>
                <li className='text-[rgb(148,165,193)] cursor-pointer hover:text-[rgb(239,209,2)]'>Experience</li>
                <li className='text-[rgb(148,165,193)] cursor-pointer hover:text-[rgb(239,209,2)]'>Work</li>
                <li className='text-[rgb(148,165,193)] cursor-pointer hover:text-[rgb(239,209,2)]'>Education</li>
                <li className='text-[rgb(148,165,193)] cursor-pointer hover:text-[rgb(239,209,2)]'>Work</li>
              </ul>
            </div>
            <div className='w-[20%] h-[100%] flex justify-between '>
              <button className='m-auto w-[50%] h-[60%]  border border-[rgb(239,209,2)] rounded text-[rgb(239,209,2)] hover:bg-[rgb(58,81,116)]'>Resume</button>
            </div>
          </div>
        </div>

        {/* SIDE FIXED LINKS STARTS HERE */}
        <div className='w-[15vw] h-[80vh] bg-yellow-300 fixed top-2 left-3'>

        </div>
        <div className='w-[15vw] h-[80vh] bg-yellow-300 fixed bottom- right-3'>

        </div>

        {/* HERO SECTION STARTS HERE */}
        <div className='w-[100vw] h-[100vh] bg-[rgb(10,25,47)]  mt-[100px] '>
          <div className='w-[65%] h-[100%] pr-4  m-auto flex gap-5 flex-col' >
            <h1 className='font-mono text-xl font-bold text-[rgb(239,209,2)]'>Hi my name is</h1>
            <h2 className='text-7xl font-bold text-[rgb(148,165,193)]'>Sachin Gahlot.</h2>
            <h3 className='text-7xl font-bold text-[rgb(148,165,193)]'>I craft things for the web.</h3>
            <p className='pr-[340px] font-semibold tracking-wider text-[rgb(148,165,193)]'>Seasoned software maestro with a flair for architecting sleek, scalable solutions. Fluent in the language of innovation, I thrive on pushing the boundaries of technology. A coding virtuoso, I'm on a mission to elevate software to new heights of cool efficiency and unparalleled performance.</p>
            <div className='w-[100%] mt-2  h-auto'><button className='w-[250px] h-[50px]  border border-[rgb(239,209,2)] text-[rgb(239,209,2)] hover:bg-[rgb(58,81,116)] rounded'>Download my resume</button></div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
