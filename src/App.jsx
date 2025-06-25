import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/NavBar/Navbar'
import Works from './components/Projects/Works'
import Service from './components/Services/Service'
// import bgvideo from './assets/video.mp4'
import './App.css'
function App() {

  return (

    <>
    {/* <div className="container">
    <video autoPlay loop muted className='bg-video'> 
      <source src = {bgvideo} type='video/mp4' ></source>
    </video>
     </div>
    <div className="content"> */}
        <Navbar/>
        <Intro />
        <About />
        <Service />
        <Works />
        <Contact />
        <Footer />
        
    {/* </div> */}
    
    </>
  )
}

export default App
