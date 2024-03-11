import React from "react";
import { NavLink } from "react-router-dom";

function ContactLink(props) {
    return (
        <section className="contact">
            <NavLink to="/contacts" className="contact_text"> Contact us</NavLink>
        </section>
    );

}

export default ContactLink;