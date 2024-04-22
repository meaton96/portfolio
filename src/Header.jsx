import React, { useState } from 'react';
import myLogo from '/logo_white_transparent.png';


function Header() {
    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    return (
        <header>
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={myLogo}/>
                    </a>
                    <a className={`navbar-burger ${isActive ? 'is-active' : ''}`} onClick={toggleNavbar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div className={`navbar-menu has-text-white ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <a href="#project_header" className="navbar-item">
                            Projects
                        </a>
                        <a href="#resume" className="navbar-item">
                            Resume
                        </a>
                        <a href="#project_header" className="navbar-item">
                            About
                        </a>
                        <a href="https://github.com/meaton96" className="navbar-item">
                            Github
                        </a>

                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;