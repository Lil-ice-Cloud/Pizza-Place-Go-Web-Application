import Video from 'next-video';
import myVideo from '@videos/pizza1.mp4';


export default function Home() {
    return(
        <>
            <main className="relative w-screen h-screen overflow-hidden">
                {/* the Background video myVideo */}
                <Video
                    src={myVideo}
                    autoplay
                    muted
                    loop
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover"
                >
                </Video>
                <h1 className="
                absolute
                left-0
                bottom-0
                w-full
                px-12
                pd-12
                pt-24
                text-white
                text-[34px]
                font-bold
                ">
                    Next.js background video
                </h1>
            </main>

        </>
    )
}