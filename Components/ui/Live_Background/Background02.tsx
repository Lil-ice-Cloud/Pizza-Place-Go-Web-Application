import Link from 'next/link';
import Image from 'next/image';
import myVideo from "@videos/PizzaGo.mp4";
import Video from "next-video";

export default function Background02() {
    return (
        <>
            <Video
                src={myVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="absolute inset-0 w-full h-5 object-cover z-0"
            >
            </Video>
        </>
    );
}