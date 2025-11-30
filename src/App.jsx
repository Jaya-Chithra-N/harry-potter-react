import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header />
      <Navbar onSelect={scrollTo} />
      <Main />
      <Footer />
    </div>
  )
}
