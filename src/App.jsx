import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Info from './Info/Info'
import Gallery from './Gallery/Gallery'
import Book from './Book/Book'
const App = () => {

  return (
    <div className="App">
      <Header />
      <Info />
      <Gallery />

      <Footer />
    </div>
  )
}

export default App;
