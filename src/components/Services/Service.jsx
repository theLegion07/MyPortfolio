import React from 'react'
import Data from '../../assets/Services/Data.js'
import '../Services/Service.css'
const Service = () => {
  return (
    <section className='Service-container' id = "Serv">
      <h1 className="section-title">My Services</h1>
      <div className="services-wrapper">
      <div className="services-grid">
                {
        Data.map((data) =>{
          return <div key={data.serviceNo} className="service-card">
            <div className="icon">
              <img  src = {data.icon} alt= {data.serviceName} class = "com-icons"  />
            </div>
            <h3>{data.serviceName}</h3>
            <p>{data.serviceDesc}</p>
          </div>
        })
      }
      </div>
      </div>
     
    </section>
  )
}

export default Service 