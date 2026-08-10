'use client';

import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapStyle = {
    width: "50%",
    height: "50vh"
}

const PinPoint = {
    lat: 8.042356562269601,
    lng: 80.95546416619862,
}

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

                    ">
                    <LoadScript googleMapsApiKey= {apiKey ||''}>
                        <GoogleMap
                        mapContainerStyle={mapStyle}
                        center={PinPoint}
                        zoom={15}
                        >
                            <Marker position={PinPoint}/>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </>
    );
}
