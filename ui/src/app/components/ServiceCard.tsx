"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface PricingItem {
    name: string;
    price: string;
}

interface ServiceCardProps {
    title: string;
    icon: string;
    description: string;
    pricing: PricingItem[];
}

export default function ServiceCard({ title, icon, description, pricing }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const showBack = isHovered || isClicked;

    return (
        <div 
            className={` border border-black/5 transition-colors duration-500 relative overflow-hidden h-[420px] cursor-pointer rounded-sm ${showBack ? 'bg-zinc-950 text-white' : 'bg-surface-container-lowest hover:bg-zinc-900/5'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsClicked(false); }}
            onClick={() => setIsClicked(!isClicked)}
            onBlur={() => setIsClicked(false)}
            tabIndex={0}
        >
            {/* Front Face */}
            <div className={`absolute inset-0 p-10 lg:p-12 flex flex-col transition-all duration-500 ${showBack ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                <div className="mb-10 text-black">
                    <span className="material-symbols-outlined text-5xl" data-icon={icon}>{icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">
                    {description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase mt-auto">
                    <span className="material-symbols-outlined text-sm" data-icon="touch_app">touch_app</span>
                    Tap / Hover for Pricing
                </div>
            </div>

            {/* Back Face (Price List) */}
            <div className={`absolute inset-0 p-10 lg:p-12 flex flex-col text-white transition-all duration-500 ${showBack ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <h3 className="text-sm font-black text-zinc-400 tracking-[0.2em] uppercase mb-8">Pricing Tier</h3>
                <ul className="space-y-4 text-sm font-medium w-full flex-1">
                    {pricing.map((item, index) => (
                        <li key={index} className="flex items-center justify-between border-b border-zinc-700 pb-2">
                            <span>{item.name}</span>
                            <span className="font-black text-base">{item.price}</span>
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className="text-xs flex items-center gap-2 font-black tracking-widest uppercase mt-auto text-white hover:text-blue-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                    Start Project <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
