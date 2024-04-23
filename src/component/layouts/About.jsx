import React from 'react'
import logo from "../../assets/logo.jpg"

const About = () => {
  return (
    <>
    <div className='w-full bg-blue-950  flex justify-evenly p-4 gap-5 flex-col sm:flex-row '>
      <img src={logo} alt="me" className='w-full sm:w-96' />
      <div className='text-white text-xl font-semibold text-justify sm:text-start'>Hey! 😄 My name is Ravibhushan, Self Driven, Quick Starter Passionate Programmer With Curious Mind Focused and enthusiastic developer with a keen interest in software development and Coompetitive Programming. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world problems.</div>
    </div>
    </>
  )
}

export default About