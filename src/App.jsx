import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/layouts/Home'
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Skill from './component/layouts/Skill'
import Contact from './component/layouts/Contact'
import About from "./component/layouts/About"
import Education from "./component/layouts/Education"

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Routes>
      <Route path='/skill' element={<Skill/>}/>
    </Routes>
    <Routes>
      <Route path='/education' element={<Education/>}/>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </Router>
    
    
    </>
  )
}

export default App