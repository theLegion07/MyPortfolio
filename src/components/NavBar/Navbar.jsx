import React, { useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import hambug from  '../../assets/Navbar/hamburger.svg'
import cross from '../../assets/Navbar/cross.svg'
const Navbar = () => {
  const menubar = useRef();
  const ham = () =>{
    menubar.current.style.right = "0"
  }
  const cros = ()=>{
    menubar.current.style.right = "-350px"
  }
  return (
    <div className='Navi'>
      <div className="header">
         <h2><AnchorLink href='#intro'>LEGION</AnchorLink></h2>
      <img src={hambug} alt="hamburger" onClick={ham} className='hamb'/>
      </div>
      <ul ref = {menubar}className="navi-menu">
      <img src={cross} alt="cross" onClick = {cros}className='cross' />
      <li><AnchorLink href = "#About" offset={70}> About</AnchorLink></li> 
      <li> <AnchorLink href = "#cont" offset={70}>Contact</AnchorLink></li>
      <li><AnchorLink href = "#Serv" offset={70}>Services</AnchorLink></li> 
      <li><AnchorLink href = "#pro" offset={70}>Projects</AnchorLink></li> 
      </ul>
    </div>
  )
}

export default Navbar