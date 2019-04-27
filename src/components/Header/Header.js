import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="header-container">
            <div className="header">{props.header}</div>
            <p className="header-body">{props.body}</p>
        </div>
    )
}

export default Header;