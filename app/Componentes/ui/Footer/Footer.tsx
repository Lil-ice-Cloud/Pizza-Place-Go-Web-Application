"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000); // Reset state after 5 seconds
    }
  };

  return (
    <footer className="relative w-full bg-neutral-900 text-neutral-300 border-t border-white/5 backdrop-blur-md pt-20 pb-10 overflow-hidden">
      {/* Radiant glow effect inside footer */}
      <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Pizza Place Go Logo"
              width={45}
              height={45}
              className="object-cover rounded-full"
            />
            <span className="text-lg font-black tracking-wider text-white">
              Pizza Place Go
            </span>
          </Link>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Handcrafted wood-fired pizzas made with premium ingredients and baked to perfection. Grab our sizzling hot deals today!
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-800/50 hover:bg-amber-500 hover:text-neutral-950 flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-800/50 hover:bg-amber-500 hover:text-neutral-950 flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-800/50 hover:bg-amber-500 hover:text-neutral-950 flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 transform hover:scale-105">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link href="/features" className="hover:text-amber-500 transition-colors duration-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-amber-500 transition-colors duration-300">
                Pricing
              </Link>
            </li>
            <li>
              <a href="#hot-deals" className="hover:text-amber-500 transition-colors duration-300">
                Hot Deals
              </a>
            </li>
            <li>
              <a href="#pizza-menu" className="hover:text-amber-500 transition-colors duration-300">
                Gourmet Menu
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Hours */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Hours & Contact</h4>
          <ul className="flex flex-col gap-3.5 text-sm leading-relaxed text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">🕒</span>
              <div>
                <p className="font-semibold text-white text-xs uppercase">Wood-fired Oven Hours</p>
                <p className="text-xs mt-1">Tue - Sun: 11:00 AM - 10:00 PM</p>
                <p className="text-xs text-red-500 font-medium">Monday: Closed</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">📍</span>
              <span className="text-xs">No. 42, Galle Road, Colombo 03, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-500 font-bold">📞</span>
              <span className="text-xs">+94 (11) 234-5678</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Subscribe</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Subscribe to our newsletter for exclusive discounts, free toppings, and weekly hot offers!
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={subscribed}
              className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                subscribed
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20"
              }`}
            >
              {subscribed ? "Subscribed! 🍕" : "Subscribe Now"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 mt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
        <p>&copy; {new Date().getFullYear()} Pizza Place Go. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <span className="text-red-500 animate-pulse">🔥</span> by{" "}
          <span className="text-neutral-400 hover:text-amber-500 transition-colors duration-300 font-bold">
            Pizza Place Go Team
          </span>
        </p>
      </div>
    </footer>
  );
}
