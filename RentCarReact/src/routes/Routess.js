import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from  '../pages/Home'
import About from  '../components/User/About'
import CarDescription from  '../pages/CarDescription'
import Cars from '../pages/Cars'
import ErrorPage from '../pages/ErrorPage'
import Contact from '../pages/Contact'


const Routess = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/cars/:slug' element={<CarDescription/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      
    </Routes>
    
  )
}

export default Routess