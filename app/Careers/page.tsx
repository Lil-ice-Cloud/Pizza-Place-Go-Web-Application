'use client';

import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Footer from "@/Components/ui/Footer/Footer";

export default function CareersPage() {
    return (
        <>

            <Navbar/>
            <span className="
                 w-full
                 min-h-screen
                 bg-neutral-950
                 ">
                <div className="
                pt-24
                main-h-screen
                flex
                items-center
                justify-center
                ">
                    <h1 className="
                    text-white
                    ">
                        Current Job Openings
                    </h1>
                </div>
            </span>
            <Footer/>
        </>
    )
};