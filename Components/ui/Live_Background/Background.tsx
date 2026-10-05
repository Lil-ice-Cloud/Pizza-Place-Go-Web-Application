import myVideo from "@videos/PizzaGo.mp4";
import Video from "next-video";

export default function Background() {
    return (
        <>
            <div className="
            absolute
            inset-0
            w-full
            h-full
            overflow-hidden
            pointer-events-none
            z-0">
                <Video
                    src={myVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    /* Mobile video css */
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
                    z-0"
                >
                </Video>
            </div>
        </>
    );
}