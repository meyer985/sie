import React from "react";
import pic1 from "../images/serv1.jpg"
import pic2 from "../images/serv2.jpg"
import pic3 from "../images/serv3.webp"
import pic4 from "../images/serv4.jpg"

function Solutions(props) {
    return (
<section className="solutions serv">
    <div className="serv_card serv_card_background">
        <img className="serv_image" src={pic1}/>
        <h1 className="service_card_header serv_header">Export</h1>
        <div className="serv_text">When exporting products from the Netherlands to non-European countries, you must be able to submit export documents.


        </div>
    </div>
    <div className="serv_card">
        <h1 className="service_card_header serv_header">Import</h1>
        <div className="serv_text">When importing products from non-European countries, you must be able to submit import documents.
            </div>
        <img className="serv_image" src={pic2}/>
    </div>
    <div className="serv_card serv_card_background">
        <img className="serv_image" src={pic3}/>
        <h1 className="service_card_header serv_header">Transit</h1>
        <div className="serv_text">With a transit document you can transport European goods in non-European countries
            Import
            </div>
    </div>
    <div className="serv_card">
        <h1 className="service_card_header serv_header">Sertificates</h1>
        <ul className="serv_list ">
            <li className="serv_text">Sertificate 1</li>
            <li className="serv_text">Sertificate 2</li>
            <li className="serv_text">Document 3</li>
            <li className="serv_text">Document 4</li>
        </ul>

    </div>


</section>
);

}

export default Solutions