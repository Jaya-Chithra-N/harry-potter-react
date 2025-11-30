import React from 'react'

export default function Navbar({ onSelect }) {
  return (
    <nav className="navbar-section">
      <div className="nav-inner">
        <a href="#characters" onClick={() => onSelect('characters')}>🪄 Characters</a>
        <a href="#houses" onClick={() => onSelect('houses')}>🏰 Hogwarts Houses</a>
        <a href="#books" onClick={() => onSelect('books')}>📚 Books</a>
        <a href="#creatures" onClick={() => onSelect('creatures')}>🧹 Magical Creatures</a>
      </div>
    </nav>
  )
}
