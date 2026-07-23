import Link from 'next/link';
import Image from 'next/image';
import {ShoppingCart} from "lucide-react";
import hot_dealsPage from "@/app/Meals_and_Pricing/page";
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
        bg-black/20
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
                <Link href="/public" className="
                flex
                items-center
                gap-3
                ">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                        className="
                            h-15
                            w-15
                            object-cover"
                    >
                    </Image>
                    {/* TEXT NEXT TO LOGO */}
                    <span className="
                    text-xl
                    font-bold
                    text-white
                    ">
                        Pizza Place Go
                    </span>
                </Link>

                <Link href="/public" className="
                text-xl
                font-bold
                text-white
                ">

                </Link>

                {/* Navigation Links */}
                <div className="
                flex
                items-center
                gap-6
                ">
                    <Link href="/Locations" className="
                    text-sm
                    font-medium
                  text-slate-100
                    transition-colors
                  hover:text-orange-400
                  dark:text-slate-200
                  dark:hover:text-white
                    ">
                        Locations
                    </Link>
                    <Link href="/Meals_and_Pricing" className="
                    text-sm
                    font-medium
                  text-slate-100
                    transition-colors
                  hover:text-orange-400
                  dark:text-slate-200
                  dark:hover:text-white
                    ">
                        Meals & Pricing
                    </Link>
                    <Link href="/Spatial_Events" className="
                    text-sm
                    font-medium
                  text-slate-100
                    transition-colors
                  hover:text-orange-400
                  dark:text-slate-200
                  dark:hover:text-white
                    ">
                        Spatial Events
                    </Link>
                    <Link
                        href="/Order"
                          className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                        bg-slate-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                        text-black
                          transition-transform
                          hover:scale-105
                        hover:text-orange-400
                    ">
                        <span>
                            Order
                        </span>
                        <ShoppingCart
                            className="
                            h-auto
                            w-auto
                            "/>
                    </Link>
                </div>
            </div>
        </nav>
    );
}