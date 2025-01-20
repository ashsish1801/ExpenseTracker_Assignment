import React from 'react'
import InputComponent from './InputComponent'
import '../Styles/HomePage.css'
import img1 from '../assets/expense_image.jpg';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <InputComponent/>
    </>
  )
}

export default HomePage