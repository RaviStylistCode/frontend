import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import logo from "../../assets/logo.jpg"

const Home = () => {
  return (
   <>
    <div className=" justify-evenly flex flex-col-reverse sm:flex-row pt-[100px] pr-[70px] pl-[70px]">
      <div className="w-1/2 h-full p-3">
        <h1 className='text-4xl p-4 text-teal-600 font-bold'>HELLO ,</h1>
        <h2 className='text-7xl p-2 text-rose-400'>I'm <span className='text-rose-700 font-bold'>Ravibhushan</span></h2>
        <h3 className='text-slate-400 font-bold p-2 sm:p-4 sm:text-3xl'>A FullStack Developer</h3>
        <h1 className='text-3xl p-4 text-cyan-400 font-bold'>
        <Typewriter
            words={['Developer', 'Programmer', 'UI/UX Designer', 'Youtuber!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </h1>
        {/* icons */}
        <div className='flex flex-row gap-5 bg-gray p-8'>
            <div className='bg-white rounded-full p-4 hover:bg-red-500 shadow-2xl cursor-pointer '>1111</div>
            <div className='bg-white rounded-full p-4 hover:bg-blue-500 shadow-2xl cursor-pointer'>2222</div>
            <div className='bg-white rounded-full p-4 hover:bg-green-500 shadow-2xl cursor-pointer'>3333</div>
        </div>
        {/* icons end */}
        <div className='flex flex-row'>
            <button className=' text-rose-400 p-4 rounded-xl m-2 border-2 border-rose-600 hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/50 hover:text-white delay-700'>Download CV</button>
            {/* <button className=' text-rose-400 p-4 rounded-xl m-2 border-2 hover:bg-rose-600 hover:text-white delay-200'>Linkedin</button> */}
        </div>
      </div>
      <img src={logo} alt="myimg" className=' hover:hue-rotate-15 shadow-lg shadow-cyan-500/50 rounded-full  h-[400px]' />
    </div>

    {/*interest  */}
    <div className=' w-full h-full p-8 justify-evenly flex flex-col  '>
        
            <h1 className='text-3xl text-rose-400 font-bold ml-10'>Interest---------</h1>
        <div className='flex flex-col gap-3 sm:flex-row  m-5'>
            <div className='bg-white text-xl text-gray-400 font-bold text-center justify-center p-8 w-full h-[100px] hover:bg-slate-200  rounded shadow'>Web Development</div>
            <div className='bg-white text-xl text-gray-400 font-bold text-center justify-center w-full h-[100px] hover:bg-slate-200 rounded p-8 shadow'>Mobile App Development</div>
            <div className='bg-white text-xl text-gray-400 font-bold text-center justify-center w-full h-[100px] hover:bg-slate-200 rounded p-8 shadow'>Competitive Programming</div>
            <div className='bg-white text-xl text-gray-400 font-bold text-center justify-center w-full h-[100px] hover:bg-slate-200 rounded p-8 shadow'>Artificial Intellegence</div>
        </div>

    </div>
    {/* interest end */}

    <div className=' w-full h-full justify-evenly flex gap-5 flex-col sm:flex-row p-8'>
        <img  src={logo} alt='myimg' className='w-full rounded sm:w-96'/>
        <div className=' bg-white p-3'>
            <p className='  text-lg text-gray-400 font-semibold font-serif p-6'>Hey! 😄 My name is Ravibhushan, Self Driven, Quick Starter Passionate Programmer With Curious Mind Focused and enthusiastic developer with a keen interest in software development and Coompetitive Programming. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world problems.</p>

            <div className='  flex flex-row justify-around '>
                <p>Date Of Birth : 28 Oct 2001</p>
                <p> City : Patna, India</p>
            </div>

            <div className='flex flex-row justify-evenly m-5'>
                <p>Phone : 7645066610</p>
                <p>Email : mayanksinghaniya7368@gmail.com</p>
            </div>

        </div>
    </div>

   </>

    
  )
}

export default Home