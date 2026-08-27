"use client";

import { useEffect, useState } from "react";

/**
 * Optional still image shown instead of the video on phones.
 * Leave empty and the warm gradient below stands in — it costs zero bytes.
 * To add one, drop a JPG in /public and set this to "/hero-poster.jpg".
 */
const POSTER_SRC: string = "";

export default function Background() {
    const [playVideo, setPlayVideo] = useState(false);

    /**
     * The hero clip is ~20 MB. Rendering it behind `hidden md:block` would NOT
     * save that download — the browser still fetches a display:none video — so
     * the element is kept out of the DOM entirely until we know we are on a
     * wide screen. Starting at `false` also means the server and the first
     * client render agree, which keeps hydration quiet.
     */
    useEffect(() => {
        const wide = window.matchMedia("(min-width: 768px)");
        const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setPlayVideo(wide.matches && !stillness.matches);

        update();
        wide.addEventListener("change", update);
        stillness.addEventListener("change", update);
        return () => {
            wide.removeEventListener("change", update);
            stillness.removeEventListener("change", update);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
            {/* Zero-byte backdrop. This is what phones get, and what desktop
                shows for the split second before the clip decodes. */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(249,115,22,0.22),transparent_62%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_85%,rgba(180,50,10,0.18),transparent_55%)]" />

            {POSTER_SRC ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={POSTER_SRC}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            ) : null}

            {playVideo ? (
                <video
                    src="/PIZZA.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            ) : null}
        </div>
    );
}
