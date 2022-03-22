import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import "./Footerstyle.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container' id="footer">
            <div className='col'>
                <h3>We are located at</h3>
                <p>Petaling Jaya</p>
                <p>Penang</p>
                <p>Johor Bahru</p>
            </div>

            <div className='col'>
                <h3>Opening Time</h3>
                <p>tue-thu: 11:00am - 9:00pm</p>
                <p>fri-sat: 11:00am - 10:00pm</p>
                <p>sun: 11:00am - 8:30pm</p>
            </div>

            <div className='col'>
                <h3>Contact Number</h3>
                <p>(415) 123-xxxx</p>
            </div>

            
            <div className='col'>
            <h3>Our Social Media Platform</h3>
            <FaFacebookSquare className='icon' />
            <FaInstagramSquare className='icon' />
            <FaTwitterSquare className='icon' />
            </div>

        </div>
    </div>
  )
}

export default Footer