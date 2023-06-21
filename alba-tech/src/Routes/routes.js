import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import IndexLayout from '../Layout/IndexLayout'
import Service from '../Components/Service'
import Porto from '../Components/Porto'
import Login from '../Components/login'

const PrivateRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoutes><IndexLayout/></PrivateRoutes>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/service' element={<PrivateRoutes><Service/></PrivateRoutes>}/>
        <Route path='/portofolio' element={<PrivateRoutes><Porto/></PrivateRoutes>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
const PrivateRoutes = (props) =>{
  const token = localStorage.getItem('token')
  if(!token) return <Navigate to ='/login'/>
  return props.children
}

export default PrivateRoute
