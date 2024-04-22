import React, { useState } from 'react';


function Header() {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };



    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme-variables');
    };

    return (
        <header className="header">
            <div className="header_container">
                <h2>
                    {" "}
                    <span className="logo_name">
                        <img src="http://localhost:3000/Screenshot%202024-04-10%20193643.png" alt=""/>
                        MeTube
                    </span>
                </h2>
                <div className="none"></div>
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <i className="fa-solid fa-magnifying-glass"/>
                </div>
                <div className="user">
                    <div className="icon">
                        <div className="theme-toggle" onClick={toggleTheme}>
                            <span className="material-icons-sharp active">light_mode</span>
                            <span className="material-icons-sharp">dark_mode</span>
                        </div>
                        <i className="fa-solid fa-video"/>
                        <i className="fa-solid fa-bell"/>
                    </div>
                    <div className="img" style={{position: "relative"}}>
                        <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" alt="" onClick={toggleProfileDropdown}/>
                        {showProfileDropdown && (
                            <ul className="profile-link">
                                <li>
                                    <a href="#">
                                        {" "}
                                        <i className="fa-solid fa-video"/> Channel
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {" "}
                                        <i className="fa-solid fa-video"/> Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {" "}
                                        <i className="fa-solid fa-video"/> Logout
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="toggle">
                    <i className="fa-solid fa-bars" id="header-toggle"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
