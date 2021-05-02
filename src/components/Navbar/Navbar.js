import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { NavLinks } from './NavbarElement';
import { FaBars } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
    return (
        <div className='nav'>
            <div className='navbarContainer'>
                <div className='navLogo'>
                    <h2>Sakib</h2>
                </div>
                <div className='navMobileIcon' onClick={toggle}>
                    <FaBars />
                </div>
                <div className='navMenu'>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/projects' style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='/skills'>
                            <Link to='/skills' style={{ color: 'white', textDecoration: 'none' }}>Skills</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='contact'>
                            <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                        </NavLinks>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;