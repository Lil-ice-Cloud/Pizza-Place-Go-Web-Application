"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Locations", label: "Locations" },
    { href: "/Meals_and_Pricing", label: "Meals & Pricing" },
    { href: "/Spatial_Events", label: "Spatial Events" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close the drawer whenever we land on a new route
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <Image
                        src="/logo.png"
                        alt="Pizza Place Go"
                        width={60}
                        height={60}
                        priority
                        className="h-10 w-10 object-cover sm:h-12 sm:w-12 lg:h-15 lg:w-15"
                    />
                    <span className="font-heading text-lg font-normal tracking-wide text-white sm:text-xl lg:text-2xl">
                        Pizza Place Go
                    </span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                                isActive(link.href)
                                    ? "text-orange-400"
                                    : "text-slate-100"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/Order"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105 hover:text-orange-400"
                    >
                        <span>Order</span>
                        <ShoppingCart className="h-5 w-5" />
                    </Link>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 lg:hidden">
                    <Link
                        href="/Order"
                        aria-label="Order now"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-black transition-transform hover:scale-105"
                    >
                        <ShoppingCart className="h-5 w-5" />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                                isActive(link.href)
                                    ? "bg-white/10 text-orange-400"
                                    : "text-slate-100 hover:bg-white/5 hover:text-orange-400"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/Order"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-black transition-colors hover:text-orange-500"
                    >
                        <span>Order Now</span>
                        <ShoppingCart className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
