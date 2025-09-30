import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.css";
import Button from '@mui/material/Button'

const menuItems = [{ to: '/', title: 'Home' }, { to: '/about', title: 'About' }]

export default () => {
    return <div className="header">
        <NavLink to='/' className='logo-btn'>
            <div className="logo">
                <span className="logo-icon"></span>
                <span className="logo-text">Booking</span>
            </div>
        </NavLink>
        <nav className="menu">
            {menuItems.map(({ to, title }) => {
                return <NavLink to={to} key={to}><Button variant="contained" color="warning" size="small">{title}</Button></NavLink>
            })}
        </nav>
    </div>
}