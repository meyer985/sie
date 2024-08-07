import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Cover from "./Cover/Cover";
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import ContactLink from "./ContactLink/ContactLink";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Solutions from "./Solutions/Solutions";

function App() {

    const [isEnglish, setLanguage]=useState(true)
    return (
        <div className="page">
            <Header isEnglish={isEnglish} changeLanguage={setLanguage}/>
            <main className="main">
                <Cover/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Intro/>
                            <Services/>
                            <ContactLink/>
                        </>
                    }/>

                    <Route path="/about" element={<>
                        <About/>
                        <ContactLink/>
                    </>}/>
                    <Route path="/solutions" element={<>
                        <Solutions/>
                        <ContactLink/>
                    </>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>

            </main>
            <Footer/>
        </div>
    );
}

export default App;
