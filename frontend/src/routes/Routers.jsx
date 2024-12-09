import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
        <Route>
        <Home></Home>
        <Doctors></Doctors>
        <DoctorDetails></DoctorDetails>
        <Login></Login>
        <Signup></Signup>
        <Contact></Contact>
        <Services></Services>
        </Route>
    </Routes>
  )
}

export default Routers