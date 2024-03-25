import React from "react";
import vertical_parking from  "../images/trailers.webp"

function Services() {
    return (
        <section className="services">
             <img className="services_image" src={vertical_parking}/>

                         <div className="service_card">
                             <h2 className="service_card_header">Export</h2>
                                <p className="service_card_text">When exporting products from the Netherlands to non-European
                        countries, you must be able to submit export documents.</p>
                         </div>

                        <div className="service_card">
                             <h2 className="service_card_header">Import</h2>
                            <p className="service_card_text">When importing products from non-European countries, you must be
                             able to submit import documents.</p>
                        </div>

                        <div className="service_card">
                            <h2 className="service_card_header">Transit</h2>
                             <p className="service_card_text">With a transit document you can transport European goods in
                        non-European countries</p>
                         </div>

                        <div className="service_card service_card_last">
                             <h2 className="service_card_header">Sertificates</h2>
                                <p className="service_card_text">With an Origin Document, your customer can request a reduction on
                                 any import duties!</p>
                         </div>



    </section>
)

};

export default Services

