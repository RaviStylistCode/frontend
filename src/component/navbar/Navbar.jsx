import React from 'react'
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <>
    <div className=" h-[100px] w-full bg-black flex flex-row justify-evenly text-center sm:flex-row p-3">
      <h1 className='text-white p-8 text-3xl text-center font-bold'>Ravibhushan</h1>
     <nav className='sm:flex sm:flex-row'>
      <ul className='sm:flex sm:flex-row p-4'>
        <li className='sm:p-4'><a href="#" className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Home</a></li>
        <li className='sm:p-4'><a href="#" className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>About</a></li>
        <li className='sm:p-4'><a href="#" className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Skill</a></li>
        <li className='sm:p-4'><a href="#" className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Education</a></li>
        <li className='sm:p-4'><a href="#" className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Contact</a></li>
      </ul>
     </nav>
    </div>

    {/* <p>https://aman04.netlify.app/
    https://github.com/emmabostian/developer-portfolios
    </p> */}

    </>
  )
}

export default Navbar