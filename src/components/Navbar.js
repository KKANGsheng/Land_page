import React from "react"
import {FaBars} from 'react-icons/fa'
import './Navbarstyle.css'
import {Link} from "react-scroll"

const Navbar =()=>{
    return(
        <div className="navbar" id="Home">
            <div className="container">
                <h4>Sushi</h4>
                <div className="nav-menu">
                    <ul className="nav-items">                        
                        <li className="links">
                        <Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                        </li>

                        <li className="links">
                        <Link to="food" spy={true} smooth={true} offset={50} duration={500}>Food</Link>
                        </li>


                        <li className="links">
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>Footer</Link>
                        </li>
   
                       
                    </ul>
                </div>
                <div>
                    {FaBars}
                </div>
    
            </div>
        </div>
    )
}

export default Navbar