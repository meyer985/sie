import React from "react";
import logo from "../images/logo.webp"
import { NavLink} from "react-router-dom";

function Header({isEnglish, changeLanguage}) {
    return (
        <header className="header">

            <div className="logo_container">
                <a href="#" className="link"><img className="header__logo" src={logo} alt="логотип"/></a>
                <p className="logo_text">S.I.E. LOGISTICS</p>
            </div>
            <div className="navigation_wrap">
                <nav className="navigation">
                    <NavLink to="/" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>Home</NavLink>

                    <NavLink to="/about" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>About us</NavLink>

                    <NavLink to="/solutions" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>Solutions</NavLink>

                    <NavLink to="/contacts" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>Contacts</NavLink>

                </nav>
                <a className="language" onClick={()=>changeLanguage(!isEnglish)}>{isEnglish ? "English" : "Netherlands"}</a>
            </div>
        </header>)
}

export default Header;