import React from 'react'
import HomePage from './Components/HomePage'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import AboutUs from './Components/AboutUs'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/aboutUs' element={
            <>
            <Navbar/>
            <AboutUs/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
