import Aurora from "./components/Aurora";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/Navbar";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <main>

                <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-black text-center">
                        <Aurora colorStops={["#ffffff", "#6b6b6b", "#ffffff"]} blend={0.6} amplitude={1.0} speed={1} />
                    </div>
                    <div className="w-full px-8 max-w-5xl mx-auto pt-32 pb-20 text-center flex flex-col items-center justify-center">
                        <div className="text-white mix-blend-difference">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Premium Design &amp; Dev Agency</span>
                            <h1 className="text-2xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
                                Design That Defines,<br/>Code That Delivers
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-bold">
                                Visualin blends creative graphic design with seamless frontend development to build digital experiences that inspire.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center w-full sm:w-auto relative z-10">
                            <Link href="/contact" className="bg-white text-black px-11 py-5 text-sm font-bold tracking-widest rounded-xl uppercase hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] text-center flex items-center justify-center">
                                Get Started
                            </Link>
                            <a href="/v1sualin%20port.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-lg rounded-xl text-white border border-white/20 px-11 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/20 transition-all text-center flex items-center justify-center">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </section>

                <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="h-96 lg:h-[500px] w-full rounded-md overflow-hidden relative">
                            <Image fill src="/about.svg" alt="About Visualin" className="object-center group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="pt-4 lg:pt-0">
                            <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">
                                Our Modern <br />Approach
                            </h2>
                            <p className="text-2xl font-medium leading-relaxed mb-12">
                                Visualin exists at the intersection of creative design and engineering. We don't just make things look good; we build systems that perform.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Precision</h4>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">
                                        Our process is rigorous. Every pixel has a purpose, and every line of code is optimized for maximum efficiency.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Authenticity</h4>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">
                                        We reject templates. Each project is a unique architectural endeavor tailored to your brand's specific DNA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="bg-primary text-on-primary py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-end mb-20">
                            <div>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-4 block">Case Studies</span>
                                <h2 className="text-4xl font-black tracking-tight">Selected Work</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20web%20design.webp" alt="Web Design" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Web Design</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20fe%20web.webp" alt="Frontend Website" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Frontend Website</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20id%20card.webp" alt="Lanyard + Id card" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Lanyard + Id card</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20banner.webp" alt="Header + Banner + Poster" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Header + Banner + Poster</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="bg-surface-container-low py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-4xl font-black tracking-tight mb-4">Core Services</h2>
                            <div className="w-20 h-1 bg-primary"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Card 1: Web & Frontend */}
                            <div className="bg-surface-container-lowest group hover:bg-primary border border-black/5 transition-colors duration-500 relative overflow-hidden h-[420px]">
                                {/* Front Face */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col transition-all duration-500 opacity-100 translate-y-0 group-hover:translate-y-4 group-hover:opacity-0">
                                    <div className="mb-10 text-primary">
                                        <span className="material-symbols-outlined text-5xl" data-icon="web">web</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Web &amp; Frontend</h3>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Bespoke web experiences built with React and Next.js, prioritizing performance and user-centric design patterns.
                                    </p>
                                    <div className="text-xs font-black tracking-widest uppercase mt-auto">Explore Dev</div>
                                </div>
                                {/* Back Face (Price List) */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col text-on-primary transition-all duration-500 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-8 opacity-70">Pricing Tier</h3>
                                    <ul className="space-y-6 text-sm font-medium w-full flex-1">
                                        <li className="flex items-center justify-between border-b border-white/20 pb-3">
                                            <span>Desain + FE Website / layar</span>
                                            <span className="font-black text-lg">150k</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/20 pb-3">
                                            <span>Desain UIUX / wireframe</span>
                                            <span className="font-black text-lg">80k</span>
                                        </li>
                                    </ul>
                                    <a href="/contact" className="text-xs flex items-center gap-2 font-black tracking-widest uppercase mt-auto hover:opacity-70 transition-opacity">
                                        Start Project <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Graphic Design */}
                            <div className="bg-surface-container-lowest group hover:bg-primary border border-black/5 transition-colors duration-500 relative overflow-hidden h-[420px]">
                                {/* Front Face */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col transition-all duration-500 opacity-100 translate-y-0 group-hover:translate-y-4 group-hover:opacity-0">
                                    <div className="mb-10 text-primary">
                                        <span className="material-symbols-outlined text-5xl" data-icon="brush">brush</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Graphic Design</h3>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Impactful visual storytelling through premium branding, corporate presentations, and strategic poster design.
                                    </p>
                                    <div className="text-xs font-black tracking-widest uppercase mt-auto">View Designs</div>
                                </div>
                                {/* Back Face (Price List) */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col text-on-primary transition-all duration-500 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-8 opacity-70">Pricing Tier</h3>
                                    <ul className="space-y-4 text-sm font-medium w-full flex-1">
                                        <li className="flex items-center justify-between border-b border-white/20 pb-2">
                                            <span>Desain Poster</span>
                                            <span className="font-black text-base">50k</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/20 pb-2">
                                            <span>Desain Header</span>
                                            <span className="font-black text-base">50k</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/20 pb-2">
                                            <span>Desain Banner</span>
                                            <span className="font-black text-base">50k</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/20 pb-2">
                                            <span>Desain PPT / slide</span>
                                            <span className="font-black text-base">5k</span>
                                        </li>
                                    </ul>
                                    <a href="/contact" className="text-xs flex items-center gap-2 font-black tracking-widest uppercase mt-auto hover:opacity-70 transition-opacity">
                                        Start Project <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Card 3: Merchandise */}
                            <div className="bg-surface-container-lowest group hover:bg-primary border border-black/5 transition-colors duration-500 relative overflow-hidden h-[420px]">
                                {/* Front Face */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col transition-all duration-500 opacity-100 translate-y-0 group-hover:translate-y-4 group-hover:opacity-0">
                                    <div className="mb-10 text-primary">
                                        <span className="material-symbols-outlined text-5xl" data-icon="inventory_2">inventory_2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Merchandise</h3>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Curated corporate gifts and apparel that resonate. From lanyards to premium brand toolkits for your team.
                                    </p>
                                    <div className="text-xs font-black tracking-widest uppercase mt-auto">Catalog</div>
                                </div>
                                {/* Back Face (Price List) */}
                                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col text-on-primary transition-all duration-500 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-8 opacity-70">Pricing Tier</h3>
                                    <ul className="space-y-6 text-sm font-medium w-full flex-1">
                                        <li className="flex items-center justify-between border-b border-white/20 pb-3">
                                            <span>Desain Lanyard</span>
                                            <span className="font-black text-lg">20k</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/20 pb-3">
                                            <span>Desain ID Card</span>
                                            <span className="font-black text-lg">20k</span>
                                        </li>
                                    </ul>
                                    <a href="/contact" className="text-xs flex items-center gap-2 font-black tracking-widest uppercase mt-auto hover:opacity-70 transition-opacity">
                                        Start Project <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="team" className="py-32 px-8 max-w-7xl mx-auto text-center">
                    <div className="mb-20 max-w-2xl mx-auto">
                        <h2 className="text-5xl font-black tracking-tighter mb-6">The Team Behind Visualin</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            A collective of designers, developers, and strategists dedicated to pushing the boundaries of the digital landscape.
                        </p>
                    </div>
                    <div className="relative w-full aspect-21/9 bg-zinc-900 overflow-hidden shadow-xl rounded-xl border border-zinc-500/20">
                        <Image fill src="/v1sualin%20team.webp" alt="The Visualin Team" className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    </div>
                </section>
            </main>

            <footer className="w-full relative overflow-hidden py-20 px-8 bg-zinc-50 dark:bg-zinc-950">
                <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
                        <div className="max-w-xs">
                            <span className="text-xl font-black text-black dark:text-white mb-4 block">Visualin</span>
                            <p className="text-zinc-500 dark:text-zinc-400 font-['Inter'] text-sm leading-relaxed max-w-xs">
                                Building the future of digital architecture, one pixel at a time.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-6">Menu</h4>
                            <div className="flex flex-row gap-4">
                                <a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#services">Services</a>
                                <a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#portfolio">Portfolio</a>
                                <a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#about">About</a>
                                <a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#team">Team</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-6">Contact Us</h4>
                            <div className="flex flex-col gap-4">
                                <a href="https://www.instagram.com/v1sualin/" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                    Instagram
                                </a>
                                <a href="mailto:v1sualin.desain@gmail.com" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                    v1sualin.desain@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
                        <Image src="/icon.png" alt="Visualin Icon" width={140} height={140} className="w-20 md:w-32 h-auto object-contain dark:invert opacity-90 rounded-full" />
                    </div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
                    <p className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400">© 2026 Visualin. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
