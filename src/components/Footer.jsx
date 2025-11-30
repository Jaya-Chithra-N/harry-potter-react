import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <p>Made with ✨ by a Harry Potter fan — For assignment submission.</p>
        <small>© {new Date().getFullYear()} Magical Fan Club</small>
      </div>
    </footer>
  )
}
