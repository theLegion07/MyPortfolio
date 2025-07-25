import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Pranay Sai Kolloju</p>
        <p>Building modern, fast, and responsive websites with passion and precision.</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pranay Sai Kolloju | All rights reserved.</p>
      </div>
    </footer>
  ) 
}

export default Footer