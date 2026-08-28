//import { useState, useEffect } from 'react';
import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Background02 from "@/Components/ui/Live_Background/Background02";
import Footer from "@/Components/ui/Footer/Footer";

export default function SpatialEventsPage() {
    return (
        <>
            <Navbar/>
            <Background02/>
            <span className="
                 w-full
                 min-h-screen
                 bg-neutral-950
                 scroll-smooth"/>
            <Footer/>
        </>
    );
}