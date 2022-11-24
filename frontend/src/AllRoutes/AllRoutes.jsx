import React from 'react'
import { Route, Routes } from 'react-router-dom'



import Footer from '../Components/Footer/Footer'
import HomePage from '../Components/HomePage/HomePage'
import Navbar from '../Components/Navbar/Navbar'
import Signup from '../Components/SignupPage/Signup'
import Time_Tracker from '../Components/Time_Tracker/Time_Tracker'
import Login from '../Components/LoginPage/Login'
import AddPage from '../Components/Time_Tracker/AddPage'
import Clientsection from '../Components/AddClients/Clientsection'
import Tagsection from '../Components/Tags/Tagsection'
import RequiredAuth from "../hoc/RequiredAuth"
import Error from '../Components/Error'

const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        ></Route>
        
        
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      
        <Route path="/tracker" element={<RequiredAuth><Time_Tracker /></RequiredAuth>}></Route>
        
        <Route path="/taskAdd" element={<RequiredAuth><AddPage /></RequiredAuth>}></Route>
        <Route path="/client" element={<RequiredAuth><Clientsection /></RequiredAuth>}></Route>
        <Route path="/tags" element={<RequiredAuth><Tagsection /></RequiredAuth>}></Route>
        <Route path="/*" element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes