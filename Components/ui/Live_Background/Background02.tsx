import myVideo from "@videos/PIZZA.mp4";
import Video from "next-video";

export default function Background02() {
    return (
        <>
            <div className="
            absolute
            inset-0
            w-full
            h-full
            overflow-hidden
            position-events-none
            z-0
            ">
                <Video
                src={myVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                /* mobile video css */
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    '--media-object-fit': 'cover',
                    '--media-object-position': 'center',
                }}
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                min-w-full
            ">
                </Video>
            </div>
        </>
    );
}