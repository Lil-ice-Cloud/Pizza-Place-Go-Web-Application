"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Deal {
    id: string;
    title: string;
    description: string;
    price: string;
    originalPrice: string;
    image: string;
    badge: string;
    rating: string;
    badgeColor: string;
}

interface MenuItem {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    category: string;
    isSpicy: boolean;
    isGourmet: boolean;
    rating: string;
}

interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
}

export default function Home() {
    const [toastMessage, setToastMessage] = useState<{ title: string; body: string } | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

    // Auto-dismiss toast notification after 3 seconds
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const deals: Deal[] = [
        {
            id: "bogo",
            title: "Double Trouble Deal",
            description: "Buy any Large Gourmet Pizza and get a Medium Classic Pizza absolutely free. Perfect for pair dining.",
            price: "Rs. 4,490",
            originalPrice: "Rs. 7,290",
            image: "/pizza1.jpg",
            badge: "BOGO FREE",
            rating: "4.9 (120+ reviews)",
            badgeColor: "bg-red-500 shadow-red-500/50"
        },
        {
            id: "family",
            title: "Family Feast Combo",
            description: "2 Large Pan Pizzas of your choice + 1 Garlic Bread + 1.5L Coca-Cola bottle. Feeds 4-5 hungry humans.",
            price: "Rs. 7,990",
            originalPrice: "Rs. 12,990",
            image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&auto=format&fit=crop&q=80",
            badge: "BEST VALUE (-40%)",
            rating: "4.8 (240+ reviews)",
            badgeColor: "bg-orange-500 shadow-orange-500/50"
        },
        {
            id: "midweek",
            title: "Ultimate Weekday Single",
            description: "Get any single Medium Pizza at a flat rate. Available from Tuesday to Thursday.",
            price: "Rs. 2,190",
            originalPrice: "Rs. 3,290",
            image: "/pizza3.jpg",
            badge: "WEEKDAY SPECIAL",
            rating: "4.7 (85+ reviews)",
            badgeColor: "bg-amber-500 shadow-amber-500/50"
        }
    ];

    const menuItems: MenuItem[] = [
        {
            id: "m1",
            title: "Classic Margherita",
            description: "Fresh mozzarella, local vine-ripened tomatoes, extra virgin olive oil, and fresh basil leaves on our signature hand-stretched crust.",
            price: "Rs. 2,190",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80",
            category: "Veg",
            isSpicy: false,
            isGourmet: false,
            rating: "4.9"
        },
        {
            id: "m2",
            title: "Spicy Devilled Chicken",
            description: "A Sri Lankan classic! Shredded devilled chicken, red onions, capsicum, green chilies, mozzarella, and spicy tomato sauce.",
            price: "Rs. 2,990",
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80",
            category: "Non-Veg",
            isSpicy: true,
            isGourmet: false,
            rating: "4.8"
        },
        {
            id: "m3",
            title: "BBQ Chicken Tikka Fusion",
            description: "BBQ grilled chicken strips, marinated chicken tikka chunks, red onions, sweetcorn, and sweet, sticky BBQ sauce drizzle.",
            price: "Rs. 3,190",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
            category: "Non-Veg",
            isSpicy: false,
            isGourmet: true,
            rating: "4.7"
        },
        {
            id: "m4",
            title: "Sri Lankan Veggie Supreme",
            description: "Roasted bell peppers, red onions, mushrooms, sweetcorn, black olives, green chilies, and fresh local spices.",
            price: "Rs. 2,490",
            image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?w=600&auto=format&fit=crop&q=80",
            category: "Veg",
            isSpicy: false,
            isGourmet: false,
            rating: "4.6"
        },
        {
            id: "m5",
            title: "Nai Miris Paneer Tikka",
            description: "Spiced paneer cubes infused with Sri Lankan Nai Miris (hot chili), coriander, bell peppers, and red onions with a garlic herb base.",
            price: "Rs. 2,890",
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&auto=format&fit=crop&q=80",
            category: "Veg",
            isSpicy: true,
            isGourmet: true,
            rating: "4.8"
        },
        {
            id: "m6",
            title: "Creamy Garlic Mushroom & Polos",
            description: "Sautéed wild mushrooms, tender jackfruit (polos) chunks, caramelized onions, mozzarella, and a rich garlic white sauce.",
            price: "Rs. 3,290",
            image: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=600&auto=format&fit=crop&q=80",
            category: "Veg",
            isSpicy: false,
            isGourmet: true,
            rating: "4.9"
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: "t1",
            name: "Alexander Silva",
            role: "Gourmet Pizza Enthusiast",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
            comment: "The Double Trouble Deal is an absolute steal! The pizza crust was hand-tossed to perfection and arrived blazing hot. Easily the best pizza shop in town.",
            rating: 5
        },
        {
            id: "t2",
            name: "Sarah Jenkins",
            role: "Mother of Two",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
            comment: "Ordering the Family Feast Combo made our Friday movie night so easy! The garlic bread was soft, and the pizzas were huge. Definitely ordering again.",
            rating: 5
        },
        {
            id: "t3",
            name: "David Chen",
            role: "Software Developer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
            comment: "That Gourmet Truffle Mushroom pizza blew my mind. Restaurant quality delivered right to my desk. Quick delivery and top-notch packaging.",
            rating: 5
        }
    ];

    const handleClaimDeal = (title: string) => {
        setToastMessage({
            title: "Deal Applied! 🏷️",
            body: `${title} has been successfully added to your order.`
        });
    };

    const handleAddToCart = (title: string) => {
        setToastMessage({
            title: "Added to Cart! 🛒",
            body: `${title} was added to your shopping cart.`
        });
    };

    const filteredMenuItems = menuItems.filter((item) => {
        const matchesCategory =
            selectedCategory === "All" ||
            (selectedCategory === "Veg" && item.category === "Veg") ||
            (selectedCategory === "Non-Veg" && item.category === "Non-Veg") ||
            (selectedCategory === "Spicy" && item.isSpicy) ||
            (selectedCategory === "Gourmet" && item.isGourmet);

        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const categories = ["All", "Veg", "Non-Veg", "Spicy", "Gourmet"];

    return (
        <div className="w-full min-h-screen bg-neutral-950 scroll-smooth">
            {/* Hero Section */}
            <main className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <video
                    src="/pizza1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                
                {/* Hero Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse">
                        🍕 Blazing Fast Delivery
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                        CRAVE THE HOTTEST<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-500 to-red-500">
                            PIZZA DEALS
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-10 leading-relaxed font-light">
                        Fresh ingredients, sizzling hand-tossed crust, and mouth-watering toppings baked to golden perfection. Grab your slice of happiness today!
                    </p>
                    <button
                        onClick={() => document.getElementById('hot-deals')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 cursor-pointer group"
                    >
                        Explore Hot Deals
                        <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </main>

            {/* Hot Deals Section */}
            <section id="hot-deals" className="relative w-full py-24 bg-neutral-950 text-white overflow-hidden border-t border-white/5">
                {/* Radiant Glow in Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
                
                <div className="relative z-10 text-center max-w-2xl mx-auto mb-20 px-6">
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-xs block mb-3 px-3 py-1 bg-amber-500/10 rounded-full w-max mx-auto border border-amber-500/20">
                        Limited Time Offers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        🔥 TODAY&apos;S HOT DEALS
                    </h2>
                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                        Treat yourself to our handpicked gourmet combos and freshly baked specials. Grab them now before they are gone!
                    </p>
                </div>

                {/* Deals Grid */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {deals.map((deal) => (
                        <div 
                            key={deal.id}
                            className="group flex flex-col bg-neutral-900/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-orange-500/5"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={deal.image}
                                    alt={deal.title}
                                    fill
                                    sizes="(max-w-768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    unoptimized={deal.image.startsWith('http')}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent z-10" />
                                
                                {/* Badge */}
                                <span className={`absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${deal.badgeColor} uppercase tracking-wider animate-pulse`}>
                                    {deal.badge}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col grow p-6 lg:p-8">
                                {/* Rating */}
                                <div className="flex items-center gap-1.5 mb-3 text-sm text-neutral-400">
                                    <svg className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>{deal.rating}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
                                    {deal.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 grow">
                                    {deal.description}
                                </p>

                                {/* Footer details */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <div>
                                        <span className="text-2xl font-black text-white">{deal.price}</span>
                                        <span className="text-sm text-neutral-500 line-through ml-2">{deal.originalPrice}</span>
                                    </div>
                                    <button
                                        onClick={() => handleClaimDeal(deal.title)}
                                        className="px-5 py-2.5 bg-neutral-800 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600 hover:text-white text-neutral-200 text-xs font-bold rounded-xl transition-all duration-300 transform group-hover:scale-105 border border-white/5 hover:border-transparent cursor-pointer"
                                    >
                                        Claim Deal
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Smart Pizza Menu Section */}
            <section id="pizza-menu" className="relative w-full py-24 bg-neutral-950 text-white overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs block mb-3 px-3 py-1 bg-amber-500/10 rounded-full w-max mx-auto border border-amber-500/20">
                            Our Culinary Masterpieces
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
                            EXPLORE OUR MENU
                        </h2>
                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            Baked in traditional wood-fired ovens. Browse our selection or filter to find your favorite pizza.
                        </p>
                    </div>

                    {/* Search & Filter Controls */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 pb-8 border-b border-white/5">
                        {/* Search Input */}
                        <div className="relative w-full md:max-w-md">
                            <span className="absolute inset-y-0 left-4 flex items-center text-neutral-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search pizza or ingredients..."
                                className="w-full pl-12 pr-6 py-3.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/5 text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-sm placeholder-neutral-500 focus:ring-1 focus:ring-amber-500/20"
                            />
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2.5 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                                        selectedCategory === category
                                            ? "bg-linear-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                                            : "bg-neutral-900/50 hover:bg-neutral-800 border border-white/5 hover:border-white/10 text-neutral-300"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid of Menu Items */}
                    {filteredMenuItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredMenuItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group flex flex-col bg-neutral-900/30 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/30 hover:shadow-xl hover:shadow-orange-500/5"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-w-768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            unoptimized={item.image.startsWith('http')}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent z-10" />
                                        
                                        {/* Status Tags */}
                                        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                                            {item.isSpicy && (
                                                <span className="px-2.5 py-1 rounded-lg bg-red-600/90 backdrop-blur-md text-[10px] font-black uppercase text-white tracking-widest shadow-md">
                                                    🌶️ Spicy
                                                </span>
                                            )}
                                            {item.isGourmet && (
                                                <span className="px-2.5 py-1 rounded-lg bg-amber-500/90 backdrop-blur-md text-[10px] font-black uppercase text-neutral-950 tracking-widest shadow-md">
                                                    ✨ Gourmet
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Info */}
                                    <div className="flex flex-col grow p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-1 text-xs text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/25">
                                                ★ <span>{item.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-neutral-400 text-xs leading-relaxed mb-6 grow">
                                            {item.description}
                                        </p>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                            <span className="text-xl font-black text-white">{item.price}</span>
                                            <button
                                                onClick={() => handleAddToCart(item.title)}
                                                className="px-4 py-2 bg-neutral-800 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600 hover:text-white text-neutral-300 text-xs font-bold rounded-lg border border-white/5 hover:border-transparent transition-all duration-300 cursor-pointer"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-neutral-900/20 rounded-3xl border border-dashed border-white/10 max-w-md mx-auto">
                            <span className="text-4xl">🔍</span>
                            <h4 className="text-lg font-bold text-white mt-4">No Pizza Found</h4>
                            <p className="text-neutral-500 text-sm mt-1">We couldn&apos;t find any items matching &quot;{searchQuery}&quot;.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section id="testimonials" className="relative w-full py-24 bg-neutral-950 text-white overflow-hidden border-t border-white/5 pb-36">
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[130px] pointer-events-none z-0" />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs block mb-3 px-3 py-1 bg-amber-500/10 rounded-full w-max mx-auto border border-amber-500/20">
                            Our Fan Club
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
                            WHAT OUR CUSTOMERS SAY
                        </h2>
                    </div>

                    {/* Testimonial card slider */}
                    <div className="relative bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                        {/* Large Quote Mark */}
                        <span className="absolute -top-6 -left-4 text-neutral-800 text-[180px] font-serif leading-none select-none z-0 pointer-events-none">
                            “
                        </span>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote Comment */}
                            <p className="text-neutral-200 text-lg md:text-xl font-medium italic leading-relaxed mb-8 max-w-2xl">
                                &ldquo;{testimonials[activeTestimonial].comment}&rdquo;
                            </p>

                            {/* Profile Info */}
                            <div className="flex items-center gap-4 text-left">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/40">
                                    <Image
                                        src={testimonials[activeTestimonial].avatar}
                                        alt={testimonials[activeTestimonial].name}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">{testimonials[activeTestimonial].name}</h4>
                                    <p className="text-xs text-neutral-500 mt-0.5">{testimonials[activeTestimonial].role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none md:-mx-6">
                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-amber-500/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-amber-500/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Interactive Notification Toast */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 bg-neutral-900/90 backdrop-blur-xl border border-amber-500/40 px-5 py-4 rounded-2xl shadow-2xl shadow-orange-500/10 text-white animate-slide-in max-w-sm transition-all duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 shrink-0 animate-bounce">
                        🔥
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white">{toastMessage.title}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">{toastMessage.body}</p>
                    </div>
                    <button 
                        onClick={() => setToastMessage(null)} 
                        className="ml-auto text-neutral-500 hover:text-white text-xs font-bold transition-colors cursor-pointer animate-pulse"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}
