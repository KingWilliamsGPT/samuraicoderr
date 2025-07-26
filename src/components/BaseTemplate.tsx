import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseTemplate({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}