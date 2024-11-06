import React from 'react'
import { FaCloud, FaCode, FaUsers } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card bg-[#1A1919] p-[30px] rounded-lg shadow-lg">
    <div className="icon text-4xl mb-[20px] text-[#00AEEF]">{icon}</div>
    <h3 className='text-2xl font-bold mb-[10px]'>{title}</h3>
    <p className='text-[gray]'>{description}</p>
  </div>
)

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="container w-screen min-h-screen px-[100px] py-[50px]">
        <h1 className='text-4xl font-bold mb-[40px] text-center'>Our Services</h1>
        <div className="services-grid grid grid-cols-3 gap-[30px]">
          <ServiceCard 
            icon={<FaCode />}
            title="Online Code Editor"
            description="A powerful, user-friendly online code editor supporting web development and real-time collaboration."
          />
          <ServiceCard 
            icon={<FaCloud />}
            title="Cloud Storage"
            description="Secure cloud storage for your projects, allowing easy access and version control from anywhere."
          />
          <ServiceCard 
            icon={<FaUsers />}
            title="Community Support"
            description="A vibrant community of developers to share knowledge, get help, and collaborate on projects."
          />
        </div>
        <div className="cta text-center mt-[50px]">
          <h2 className='text-3xl font-bold mb-[20px]'>Ready to get started?</h2>
          <button className="btnBlue">Try it now</button>
        </div>
      </div>
    </>
  )
}

export default Services
