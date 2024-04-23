import React from 'react'
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=" h-[100px] w-full  bg-black flex  flex-row justify-evenly text-center  p-2">
      <h1 className='text-white p-8 text-3xl text-center font-bold'>Ravibhushan</h1>
     <nav className='flex flex-row p-2 '>
      <ul className='sm:flex sm:flex-row p-4'>
        <li className='sm:p-4'><Link to={"/"} className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Home</Link></li>
        <li className='sm:p-4'><Link to={"/about"} className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>About</Link></li>
        <li className='sm:p-4'><Link to={"/skill"} className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Skill</Link></li>
        <li className='sm:p-4'><Link to={"/education"} className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Education</Link></li>
        <li className='sm:p-4'><Link to={"/contact"} className='text-teal-400 text-2xl hover:text-teal-200 hover:border-b-2'>Contact</Link></li>
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