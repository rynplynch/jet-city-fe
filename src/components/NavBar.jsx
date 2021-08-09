import React from 'react'
import logo from '../jet-city-logo.png'
import Clock from './Clock'

import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    Menu,
    MenuItem,
    MenuLink,
} from '../style/Navbar';
export const NavBar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavbarContainer>
            <NavLogo to='/' className="navbar-brand" href='jet-city-logo.png'>
                <img src={logo} width="193" height="54" alt="jet city I.T. logo" />
            </NavLogo>

            <Menu>
                <MenuItem>
                    <MenuLink to="/show/cards/clients">Go to Clients</MenuLink>
                </MenuItem>
            </Menu> 
            <Clock />
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar