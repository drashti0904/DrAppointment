// importing React , the core library to create components
//importing various pages That will be used in this application
import React from 'react'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Appointment from './pages/Appointment'
//imporing navbar component which will be displayed on every pages
import NavBar from './components/NavBar'
import Myappointments from './pages/Myappointments'
import MyProfile from './pages/myprofile'
// importing routes and route from react-router-dom to manage and navigate between pages
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
//Definig the main app component that manages the layout and routing
const App = () => {
  return (
    //use some margin  around the appfor responsiveness using telwind css class
    <div className='mx-4 sm:mx-[10%]' >
       {/* Displaying the NavBar at the top of every page */}
    <NavBar />
    {/* Defining URLS for different pages of the app */}
      <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/doctors' element={<Doctors />}/>
        <Route path= '/doctors/:speciality' element={<Doctors />}/>
        <Route path= '/login' element={<Login />}/>
        <Route path= '/about' element={<About />}/>
        <Route path= 'contact' element={<Contact />}/>
        <Route path= '/myprofile' element={<MyProfile />}/>
        <Route path='/myappointments' element={<Myappointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
      </Routes>
     <Footer />
    </div>    
  )
}// Exporting the App component so it can be used anywhere in the project

export default App
