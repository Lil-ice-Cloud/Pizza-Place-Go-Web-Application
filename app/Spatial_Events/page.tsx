//import { useState, useEffect } from 'react';
import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Image from 'next/image';
import myVideo from "@videos/PIZZA.mp4";
import Video from "next-video";
import Background from "@/Components/ui/Live_Background/Background";

export default function SpatialEventsPage() {
    return (
        <>
            <Background/>
            <div className="
            w-full
            min-h-screen
            bg-neutral-950
            scroll-smooth
            "/>
            <Navbar/>
        </>
    );
}