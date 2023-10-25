import React from 'react'
import './login.css'
import {  Route, Routes } from "react-router-dom";

import  Home from '../../components/Home';
import  Login  from '../../components/Login';
import  Register  from '../../components/Regsiter';
import  Replies  from '../../components/Replier'


export const LoginScreen = () => {
  return (
    <div className='loginPage'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/:id/replies' element={<Replies />} />
        </Routes>
    </div>
  )
}
