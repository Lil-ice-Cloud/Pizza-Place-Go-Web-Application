'use client';

import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Footer from "@/Components/ui/Footer/Footer";

const mapStyle = {
    width: "50%",
    height: "70vh",
    border: "8px solid #f5f5f5",
    borderRadius: "12px",
    overflow: "hidden",
}

const PinPoint = {
    lat: 8.0417961,
    lng: 80.954179,
}
/* const nightModeOptions = {
    styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f282d" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d1c4" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ],
}; */

export default function LocationsPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    return (
        <>
            <Navbar/>
            <div className="
            w-full
            min-h-screen
            bg-neutral-950
            scroll-smooth
            ">
                <div
                    className="
                    px-16
                    py-28
                    w-auto
                    ">
                    <LoadScript googleMapsApiKey= {apiKey ||''} >
                        <div>
                                <GoogleMap
                                mapContainerStyle={mapStyle}
                                center={PinPoint}
                                zoom={19}
                                //options={nightModeOptions}
                                >
                                    <Marker position={PinPoint}/>
                                </GoogleMap>
                        </div>
                                <section className="

                                w-
                              text-white
                                text-left
                            ">
                                    <h1>Pizza Place Hingurakgoda</h1>
                                    <p>Address: Airport Road,Hingurakgoda,51400,Polonnaruwa,Sri Lanka.</p>
                                </section>
                    </LoadScript>
                </div>
            </div>
            <Footer/>
        </>
    );
}
