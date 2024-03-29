import React from "react";
import pic1 from "../images/serv1.jpg"
import pic2 from "../images/serv2.jpg"
import pic3 from "../images/serv3.webp"
import pic4 from "../images/serv4.jpg"
import {NavLink, Route} from "react-router-dom";
import About from "../About/About";
import ContactLink from "../ContactLink/ContactLink";
import { Routes, useNavigate, Navigate } from "react-router-dom";

const exp = "When exporting products from the Netherlands to non-European countries, you must be able to submit export documents. we provide a full range of services that meet your business demands, including"

const exp1 = "We have a professional multi-language team that keen in communication with transporteurs from numerous countries, including Turkey, United Kingdom, Russian Federation, Balkan countries, etc."

const imp = "When importing products from non-European countries, you must be able to submit import documents. We provide a full complex of documents depending on the way you are importing goods into European Union - by truck, by air or sea."

const trans = "With a transit document you can transport European goods in non-European countries"

const sert = "With an Origin Document, your customer can request a reduction on any import duties!"

const text = "S.I.E. - Logistics is een neutrale en onafhankelijke douane expediteur. Met locaties in Nederland, België, Verenigd Koninkrijk en de Russische Federatie. Met meer dan ruim 50 jaar ervaring in o.a. de sierteelt en AGF sector staan onze teams klaar om al uw douanezaken te regelen. Wij ondersteunen importerende en exporterende bedrijven met douaneformaliteiten en aanverwante zaken met als resultaat dat u deze zorgen aan ons kunt overlaten. S.I.E. - Logistics is een veilige en betrouwbare partner van de Douane m.b.t. alle douaneactiviteiten en heeft de status Authorised Economic Operator (AEO).Dankzij deze status hebben onze klanten tevens minder fysieke douanecontroles.Wij staan klaar voor al uw douanezaken!"

function Solutions(props) {
    return (
<section className="solutions">

    <div className="grey_line"></div>
    <h2 className="intro__title">Whatever your business goals are - export, import or transit goods - we provide you a quality customs support to help your business processes run smoothly.</h2>
    <div className="grey_line"></div>

    <div className="solutions_content">
        <div className="solutions_export">
            <h1 className="solutions_header">EXPORT</h1>
            <p className="solutions_text">{exp}</p>
            <ul className="solutions_list">
                <li> Customs export declaration</li>
                <li> Phyto-certificates</li>
                <li> Certificates of origin</li>
                <li> Booking of ferry and plane</li>
                <li> Assistance on customs inspections</li>
            </ul>
            <p className="solutions_text">{exp1}</p>
        </div>
        <div className="solutions_export solutions_import">
            <h1 className="solutions_header">IMPORT</h1>
            <p className="solutions_text">{imp}</p>
        </div>

        <div className="solutions_transit_img"></div>

        <div className="solutions_transit solutions_export">
            <h1 className="solutions_header">TRANSIT</h1>
            <p className="solutions_text">{trans}</p>
        </div>



    </div>




  {/*  <div className="solutions_content">
        <nav className="solutions_menu">
            <NavLink className="solutions_link" to="/solutions">EXPORT</NavLink>
            <NavLink className="solutions_link" to="/solutions/import">IMPORT</NavLink>
            <NavLink className="solutions_link" to="/solutions/transit">TRANSITE</NavLink>
        </nav>
       <div className="solutions_pic"> </div>

        <div className="solutions_description">
            <Routes>
                <Route path="/*" element={<>
                   <>
                       <h2>{exp}</h2>
                       <p>{text}</p>
                   </>
                </>}/>
                <Route path="/import" element={<>
                    <>
                        <h2>{imp}</h2>
                        <p>{text}</p>
                    </>
                </>}/>
                <Route path="/transit" element={<>
                    <>
                        <h2>{trans}</h2>
                        <p>{text}</p>
                    </>
                </>}/>
            </Routes>

        </div>


    </div>*/}


</section>
);
}

export default Solutions