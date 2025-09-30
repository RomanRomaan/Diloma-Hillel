import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.css";
import Button from '@mui/material/Button'

export default () => {
    return <div className="header">
        <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">Booking</span>
        </div>
        <nav className="menu">
            <NavLink to="/"><Button variant="contained" color="warning" size="small">Home</Button></NavLink>
            <NavLink to="/about"><Button variant="contained" color="warning" size="small">About</Button></NavLink>
        </nav>
    </div>
}