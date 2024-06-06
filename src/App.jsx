import React from 'react'
import Navbar from './Componants/Navbar/Navbar.jsx'
import Home from './Componants/Home/Home.jsx'
import Footer from './Componants/Footer.jsx'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App