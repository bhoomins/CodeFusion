import React from 'react'
import Navbar from '../components/Navbar'
import logo from "../images/logo.png"
import authPageSide from "../images/authPageSide.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container w-screen min-h-screen flex items-center justify-between px-[100px]">
        <div className="left w-[50%]">
          <img className='w-[200px] mb-[40px]' src={logo} alt="Logo" />
          <h1 className='text-4xl font-bold mb-[20px]'>About Us</h1>
          <p className='text-[gray] mb-[20px]'>
            We are a passionate team dedicated to providing an innovative online code editor platform. 
            Our goal is to make coding accessible, collaborative, and enjoyable for developers of all levels.
          </p>
          <p className='text-[gray] mb-[20px]'>
            With our user-friendly interface and powerful features, we aim to streamline the coding process 
            and foster a community of creative problem-solvers.
          </p>
          <button className="btnBlue mt-[20px]">Learn More</button>
        </div>
        <div className="right w-[40%]">
          <img className='w-full rounded-lg shadow-lg' src={authPageSide} alt="Coding" />
        </div>
      </div>
    </>
  )
}

export default About
