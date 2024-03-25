import React from "react";
import logo from "../images/logo.webp"
import { NavLink} from "react-router-dom";
import NL_icon from "../images/NL_flag_icon.png";
import GB_icon from "../images/GB_flag_icon.jpg";
import burger from "../images/burger3.webp";

function Header({isEnglish, changeLanguage}) {
    return (
        <header className="header">

                <div className="header_content">
                    <div className="logo_container">
                        <a href="#" className="link"><img className="header__logo" src={logo} alt="логотип"/></a>
                        <p className="logo_text">S.I.E.-LOGISTICS</p>
                    </div>
                    <div className="navigation_wrap">
                        <nav className="navigation">
                            <NavLink to="/" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>HOME</NavLink>

                            <NavLink to="/about" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>ABOUT US</NavLink>

                            <NavLink to="/solutions" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>SOLUTIONS</NavLink>

                            <NavLink to="/contacts" className={({isActive}) => `navigation_link ${isActive ? "navigation_link_active" : ""}`}>CONTACTS</NavLink>

                        </nav>
                        <img className="burger" src={burger}/>
                        <a className="language" onClick={()=>changeLanguage(!isEnglish)}><img className="language_img" src={isEnglish ? GB_icon : NL_icon}/></a>
                    </div>
                </div>

        </header>)
}

export default Header;