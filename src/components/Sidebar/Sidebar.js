import React from 'react';
import { NavLinks } from '../Navbar/NavbarElement';
import { CloseBtn, Icon, SidebarContainer, SidebarWrapper } from './SidebarElements';
import './SIdebar.css'
import { Link } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseBtn />
            </Icon>
            <SidebarWrapper>
                <div className='sidebarMenu'>
                <div className='navItems'>
                        
                            <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                        
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
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;