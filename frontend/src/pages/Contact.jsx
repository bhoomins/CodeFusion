import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import logo from "../images/logo.png"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <>
      <Navbar />
      <div className="container w-screen min-h-screen flex items-center justify-between px-[100px]">
        <div className="left w-[50%]">
          <img className='w-[200px] mb-[40px]' src={logo} alt="Logo" />
          <h1 className='text-4xl font-bold mb-[20px]'>Contact Us</h1>
          <p className='text-[gray] mb-[20px]'>
            We'd love to hear from you. Please fill out the form below or use our contact information.
          </p>
          <form onSubmit={handleSubmit} className='w-full mt-[20px]'>
            <div className="inputBox">
              <input 
                type="text" 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
                <textarea 
                    placeholder='Your Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    className="w-full bg-transparent outline-none text-white"
                ></textarea>
            </div>
            <button type="submit" className="btnBlue w-full mt-[20px]">Send Message</button>
          </form>
        </div>
        <div className="right w-[40%]">
          <div className="contact-info bg-[#1A1919] p-[30px] rounded-lg shadow-lg">
            <h2 className='text-2xl font-bold mb-[20px]'>Get in Touch</h2>
            <div className="info-item flex items-center mb-[15px]">
              <FaEnvelope className="text-[#00AEEF] mr-[10px]" />
              <p>kj.somaiya@gmail.com</p>
            </div>
            <div className="info-item flex items-center mb-[15px]">
              <FaPhone className="text-[#00AEEF] mr-[10px]" />
              <p>9137009127</p>
            </div>
            <div className="info-item flex items-center mb-[15px]">
              <FaMapMarkerAlt className="text-[#00AEEF] mr-[10px]" />
              <p>KJ Somaiya College of Engineering, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
