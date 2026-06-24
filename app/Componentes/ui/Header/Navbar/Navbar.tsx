import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-white/10
        bg-white/20
        px-6
        py-4
        backdrop-blur-md
        dark:bg-black/20
        ">
            <div className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            ">
                {/* Logo */}
                <Link href="/" className="
                text-xl
                font-bold
                text-slate-950
                dark:text-white
                ">
                    Brand
                </Link>

                {/* Navigation Links */}
                <div className="
                flex
                items-center
                gap-6
                ">
                    <Link href="/features" className="
                    text-sm
                    font-medium
                    text-slate-800
                    transition-colors
                    hover:text-slate-950
                    dark:text-slate-200
                    dark:hover:text-white
                    ">
                        Features
                    </Link>
                    <Link href="/pricing" className="
                    text-sm
                    font-medium
                    text-slate-800
                    transition-colors
                    hover:text-slate-950
                    dark:text-slate-200
                    dark:hover:text-white
                    ">
                        Pricing
                    </Link>
                    <Link href="/contact" className="
                    rounded-full
                    bg-slate-950
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition-transform
                    hover:scale-105
                    dark:bg-white
                    dark:text-slate-950
                    ">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}