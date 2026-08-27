'use client';

import Navbar from "@/Components/ui/Header/Navbar/Navbar";
// 1. Remove LoadScript, import useJsApiLoader instead
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Footer from "@/Components/ui/Footer/Footer";

const mapStyle = {
    width: "100%",
    height: "50vh",
    border: "8px solid #f5f5f5",
    borderRadius: "12px",
    overflow: "hidden",
}

const PinPoint = {
    lat: 8.0417961,
    lng: 80.954179,
}

const mapStyle2 = {
    width: "100%",
    height: "50vh",
    border: "8px solid #f5f5f5",
    borderRadius: "12px",
    overflow: "hidden",
}

const PinPoint2 = {
    lat: 8.0363505,
    lng: 80.7535578,
}

export default function LocationsPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // 2. Initialize the hook safely
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey || ''
    });

    return (
        <>
            <Navbar/>
            <div className="w-full min-h-screen bg-neutral-950 scroll-smooth">
                <div className="flex flex-row gap-8 justify-between items-start px-16 py-28 w-full">

                    {/* 3. Conditional rendering: Ensure maps only load when the API is ready */}
                    {isLoaded ? (
                        <>
                            {/* MAP 1*/}
                            <div className="w-1/2 flex flex-col gap-4">
                                <div>
                                    <GoogleMap
                                        mapContainerStyle={mapStyle}
                                        center={PinPoint}
                                        zoom={19}
                                    >
                                        <Marker position={PinPoint}/>
                                    </GoogleMap>
                                </div>
                                <section className="text-white text-left">
                                    <h1 className="text-xl font-bold">Pizza Place Hingurakgoda</h1>
                                    <p className="text-neutral-400">Address: Airport Road,Hingurakgoda, 51400,Polonnaruwa,Sri Lanka.</p>
                                    <p className="text-neutral-400">Contacts Details: (Delivery +94 70 1796-000) </p>
                                    <p className="text-neutral-400">Branch Hotline: +94 27 224-5030 | +94 710 466 566 </p>
                                </section>
                            </div>

                            {/* MAP 2*/}
                            <div className="w-1/2 flex flex-col gap-4">
                                <div>
                                    <GoogleMap
                                        mapContainerStyle={mapStyle2}
                                        center={PinPoint2}
                                        zoom={19}
                                    >
                                        <Marker position={PinPoint2}/>
                                    </GoogleMap>
                                </div>
                                <section className="text-white text-left">
                                    <h1 className="text-xl font-bold">Pizza Place Habarana</h1>
                                    <p className="text-neutral-400">Address: Dambulla road, Habarana, North Central Province, 50150, Sri Lanka.</p>
                                    <p className="text-neutral-400">Contacts: +94 71 333-4440 </p>
                                </section>
                            </div>
                        </>
                    ) : (
                        <div className="text-white w-full text-center">Loading Maps...</div>
                    )}

                </div>
                <Footer/>
            </div>
        </>
    );
}
