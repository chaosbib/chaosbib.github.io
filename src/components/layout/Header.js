import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header style={headerStyle}>
        <h1>chaosbib</h1>
        <hr color='white' />
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#333',
    borderBottomColor: '#111',
    padding: '5px',
}




export default Header