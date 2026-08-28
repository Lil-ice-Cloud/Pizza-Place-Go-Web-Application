"use client";

import { useState} from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu , X, UserPlus } from "lucide-react";

export default function Navbar(){
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

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
                hidden
                md:flex
                items-center
                gap-6
                ">
                    <Link href="/#" className="
                    text-sm
                    font-medium
                  text-slate-100
                    transition-colors
                  hover:text-orange-400
                  dark:text-slate-200
                  dark:hover:text-white
                    ">
                        Home
                    </Link>
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
                    <Link href="/Spatial_Deals" className="
                    text-sm
                    font-medium
                  text-slate-100
                    transition-colors
                  hover:text-orange-400
                  dark:text-slate-200
                  dark:hover:text-white
                    ">
                        Spatial Deals
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
                    <Link onClick={toggleMenu} href="/SingUp" className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-slate-100
                          py-2
                          px-2
                          text-base
                          font-medium
                          text-black
                          hover:text-orange-400
                          ">
                        <span>SingUp</span>
                        <UserPlus
                            className="
                        h-6
                        w-6"
                        />
                    </Link>
                </div>

                {/* Ham Menu */}
                <div className="
                md:hidden
                flex
                items-center
                ">
                    <button
                    onClick={toggleMenu}
                    className="
                    text-white
                    focus:outline-none
                    p-2
                    "
                    aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className=" h-6 w-6" /> : <Menu className=" h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="
                md:hidden
                absolute
                top-full
                left-0
                right-0
                bg-black/99
                border-b
                border-white/10
                px-6
                py-6
                flex
                flex-col
                gap-4
                backdrop-blur-lg
                ">
                    <Link onClick={toggleMenu}
                          href="/#" className="
                          text-base
                          font-medium
                          text-white
                          hover:text-orange-400
                          py-2
                          ">
                        Home
                    </Link>
                    <Link onClick={toggleMenu}
                          href="/Locations" className="
                          text-base
                          font-medium
                          text-white
                          hover:text-orange-400
                          py-2
                          ">
                        Locations
                    </Link>
                    <Link onClick={toggleMenu}
                          href="/Meals_and_Pricing" className="
                          text-base
                          font-medium
                          text-white
                          hover:text-orange-400
                          py-2
                          ">
                        Meals and Pricing
                    </Link>
                    <Link onClick={toggleMenu}
                          href="/Spatial_Events" className="
                          text-base
                          font-medium
                          text-white
                          hover:text-orange-400
                          py-2
                          ">
                        Spatial Events
                    </Link>
                    <Link onClick={toggleMenu}
                          href="/Spatial_Events" className="
                          text-base
                          font-medium
                          text-white
                          hover:text-orange-400
                          py-2
                          ">
                        Spatial Deals
                    </Link>
                    <Link onClick={toggleMenu} href="/Order" className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-slate-100
                          py-3
                          text-base
                          font-medium
                          text-black
                          hover:text-orange-400
                          ">
                            <span>Order</span>
                        <ShoppingCart
                        className="
                        h-5
                        w-5"
                        />
                    </Link>
                    <Link onClick={toggleMenu} href="/SingUp" className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-slate-100
                          py-2
                          px-2
                          text-base
                          font-medium
                          text-black
                          hover:text-orange-400
                          ">
                        <span>SingUp</span>
                        <UserPlus
                            className="
                        h-6
                        w-6"
                        />
                    </Link>
                </div>
              )}
        </nav>
    );
}