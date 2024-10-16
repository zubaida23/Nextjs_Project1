import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/portfolio.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"30%", backgroundPosition:"left 100px top 100px"}}
    >
        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className="hidden lg:block"></div>
          <div className='text-[50px] sm:text-[50px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p>Hi! I'm Zubaida Khatoon</p>
              <p>And I'm Frontend Developer</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero