'use client';

import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapStyle = {
    width: "100%",
    height: "70vh"
}

const PinPoint = {
    lat: 8.042356562269601,
    lng: 80.95546416619862,
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
                    grid
                    grid-cols-1
                    gap-40
                    px-16
                    flex-col
                    ">
                    <LoadScript googleMapsApiKey= {apiKey ||''} >
                        <div className="
                            border-8
                          border-neutral-100
                            rounded-xl
                          ">
                                <GoogleMap
                                mapContainerStyle={mapStyle}
                                center={PinPoint}
                                zoom={15}
                                //options={nightModeOptions}
                                >
                                    <Marker position={PinPoint}/>
                                </GoogleMap>
                        </div>
                    </LoadScript>
                </div>
            </div>
        </>
    );
}
