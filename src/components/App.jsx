import React from "react";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";

export default () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element="home" />
                <Route path="/about" element="about" />
                <Route path="/hotels" element="hotels" />
                <Route path="*" element="Oops, no such page..." />
            </Routes>
            <Footer />
        </div>
    );
};
