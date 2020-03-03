import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Navigation = () => {
    return (
        <div className='sticky-top' style={navStyle}>
            <Link to='/' className='links'>HOME</Link> &nbsp; | &nbsp;
            <Link to='/portfolio' className='links'>PORTFOLIO</Link> &nbsp; | &nbsp;
            {/* <Link to='/employment' className='links'>EMPLOYMENT</Link> &nbsp; | &nbsp; */}
            <Link to='/about' className='links'>ABOUT</Link>
        </div>
    )
}

const navStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#333',
    borderBottomColor: '#111',
    padding: '5px',
    marginTop: '-1%',
}




export default Navigation