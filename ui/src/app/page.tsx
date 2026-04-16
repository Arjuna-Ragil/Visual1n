import Aurora from "./components/Aurora";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";

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
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
                                Crafting Visuals With Purpose
                            </h1>
                            <p className="text-sm md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
                                V1SUALIN blends creative graphic design with seamless frontend development to build digital experiences that inspire.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto relative z-10">
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
                            <h2 className="text-4xl font-black mb-8">
                                Our Modern Approach
                            </h2>
                            <p className="text-sm font-medium leading-relaxed mb-12 ">
                                V1SUALIN exists at the intersection of creative design and engineering. We don't just make things look good; we build systems that perform.
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
                                    <Image fill src="/v1sualin%20web%20design.webp" alt="Web Design" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Web Design</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20fe%20web.webp" alt="Frontend Website" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Frontend Website</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20id%20card.webp" alt="Lanyard + Id card" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Lanyard + Id card</h3>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative aspect-16/10 bg-zinc-900 mb-8 overflow-hidden rounded-md border border-zinc-500/20">
                                    <Image fill src="/v1sualin%20banner.webp" alt="Header + Banner + Poster" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
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

                            <ServiceCard
                                title="Web & Frontend"
                                icon="web"
                                description="Bespoke web experiences built with React and Next.js, prioritizing performance and user-centric design patterns."
                                pricing={[
                                    { name: 'Desain + FE Website / layar', price: '150k' },
                                    { name: 'Desain UIUX / wireframe', price: '80k' }
                                ]}
                            />
                            <ServiceCard
                                title="Graphic Design"
                                icon="brush"
                                description="Impactful visual storytelling through premium branding, corporate presentations, and strategic poster design."
                                pricing={[
                                    { name: 'Desain Poster', price: '50k' },
                                    { name: 'Desain Header', price: '50k' },
                                    { name: 'Desain Banner', price: '50k' },
                                    { name: 'Desain PPT / slide', price: '5k' }
                                ]}
                            />
                            <ServiceCard
                                title="Merchandise"
                                icon="inventory_2"
                                description="Curated corporate gifts and apparel that resonate. From lanyards to premium brand toolkits for your team."
                                pricing={[
                                    { name: 'Desain Lanyard', price: '20k' },
                                    { name: 'Desain ID Card', price: '20k' }
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <section id="team" className="py-32 px-8 max-w-7xl mx-auto text-center">
                    <div className="mb-5 max-w-2xl mx-auto">
                        <h2 className="text-5xl font-black tracking-tighter mb-6">The Team Behind V1SUALIN</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            A collective of designers, developers, and strategists dedicated to pushing the boundaries of the digital landscape.
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto aspect-video bg-zinc-900 overflow-hidden shadow-xl rounded-xl border border-zinc-500/20">
                        <Image fill src="/v1sualin%20team.webp" alt="The Visualin Team" sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    </div>
                </section>
            </main>

            <footer className="w-full relative overflow-hidden py-20 px-8 bg-zinc-50 dark:bg-zinc-950">
                <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
                        <div className="max-w-xs">
                            <span className="text-xl font-black text-black dark:text-white mb-4 block">V1SUALIN</span>
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
                    <p className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400">© 2026 V1SUALIN. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
