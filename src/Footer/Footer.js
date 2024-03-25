import React from "react";
import footer_logo from "../images/footer.jpeg"

function Footer(props) {
    return (
        <footer className="footer">
            <img className="footer_pic" src={footer_logo}/>

                <div className="footer_info">
                    <div>
                        <h1 className="footer_header">S.I.E.-Logistics</h1>
                        <p className="footer_text">Postbus 622, 2671 GS, Westland, the Netherlands</p>
                        <p className="footer_text">E-mail: customs@sie-logistics.com</p>
                        <p className="footer_text">Tel.: +31 (0) 174-248-247</p>
                    </div>
                    <p className="footer_text">&copy; S.I.E.-LOGISTICS 2024</p>
                </div>

        </footer>
    );
}

export default Footer