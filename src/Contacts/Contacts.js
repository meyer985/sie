import React from "react";

function Contacts(props) {
    return (
        <section className="contacts">
            <form className="contacts_form">


                    <input className="form_input" type="text" name="name" id="name" placeholder="Your name" required/>



                    <input className="form_input" type="email" name="email" id="email" placeholder="Your email" required/>




                    <input className="form_input form_input_main" type="text" name="text" id="text" required/>

                <button className="form_input" type="submit">Send</button>


            </form>

            <div className="contacts_block">
               <div className="contacts_card">
                   <h1 className="service_card_header">Planning</h1>
                   <p className="contacts_card_entry">Tel: +31 (0) 000-000-000</p>
                   <p className="contacts_card_entry">email: example@example.com</p>
               </div>
                <div className="contacts_card">
                    <h1 className="service_card_header">Finance</h1>
                    <p className="contacts_card_entry">Tel: +31 (0) 000-000-000</p>
                    <p className="contacts_card_entry">email: example@example.com</p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;