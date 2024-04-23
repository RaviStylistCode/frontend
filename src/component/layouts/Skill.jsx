import React from 'react'

const Skill = () => {
  return (
    <>
    <div className='w-full h-full bg-white flex gap-5 flex-col p-8'>
        <div className='bg-white p-8 flex flex-col shadow-2xl shadow-gray-300'>
        <h1 className='text-3xl text-gray-400 font-bold'>Languages and Databases</h1>
        <div className='flex flex-col sm:flex-row gap-3 flex-wrap justify-center items-center'>
        <img  className="w-[100px]" src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="skillimg" />
        <img  className="" src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="skillimg" />
        <img className="w-[100px]"  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="skillimg" />
        </div>
        </div>

         <div className='bg-white p-8 flex flex-col shadow-2xl shadow-gray-300'>
        <h1 className='text-3xl text-gray-400 font-bold'>Frameworks</h1>
        <div className='flex flex-col sm:flex-row gap-3 flex-wrap justify-center items-center'>
        <img  className="w-[100px]" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="skillimg" />
        <img  className="" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="skillimg" />
       
        </div>
        </div>

         <div className='bg-white p-8 flex flex-col shadow-2xl shadow-gray-300'>
        <h1 className='text-3xl text-gray-400 font-bold'>Tools</h1>
        <div className='flex flex-col sm:flex-row gap-3 flex-wrap justify-center items-center'>
        <img  className="w-[100px]" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="skillimg" />
        <img  className="" src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" alt="skillimg" />
        <img className=""  src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="skillimg" />
       
        </div>
        </div>
    </div>
    </>
  )
}

export default Skill