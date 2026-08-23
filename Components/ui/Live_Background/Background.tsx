import Link from 'next/link';
import Image from 'next/image';
import myVideo from "@videos/PIZZA.mp4";
import Video from "next-video";

export default function Background() {
    return (
        <>
            <Video
                src={myVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
            </Video>
        </>
    );
}