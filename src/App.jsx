import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home.jsx";
import News from "./pages/news.jsx";
import Team from "./pages/team.jsx";
import ContactPage from "./pages/contact.jsx";
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Contact />
            <Footer />
        </Router>
    );
};

export default App;
