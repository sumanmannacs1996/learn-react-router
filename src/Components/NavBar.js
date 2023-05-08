import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';
import { useAuth } from '../auth';

function NavBar() {
    const { user } = useAuth()
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {
                !user && <NavLink to='/login'>Login</NavLink>
            }
        </nav>
    )
}

export default NavBar