import React from 'react'
import './index.css'
import Navbar from './components/shared/navbar'
import Footer from './components/shared/footer'

import Home from './pages/home'
import About from './pages/About'

import ContactForm from './pages/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      
      <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
