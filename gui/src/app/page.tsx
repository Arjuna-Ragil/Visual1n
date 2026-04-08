import Aurora from "./components/Aurora";

export default function LandingPage() {
    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 transition-all">
                <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
                    <div className="text-2xl font-black tracking-tighter text-black dark:text-white">Visualin</div>

                    <div className="hidden md:flex items-center gap-10">
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-black dark:text-white border-b-2 border-black dark:border-white pb-1" href="#">Services</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Portfolio</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">About</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Team</a>
                    </div>
                    <button className="bg-primary text-on-primary px-8 py-3 text-sm font-bold tracking-tight hover:opacity-70 transition-opacity active:scale-95 duration-200 ease-in-out">
                        Contact Us
                    </button>
                </div>
            </nav>
            <main>

                <section className="relative w-full min-h-screen flex items-center overflow-hidden">
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
                            <button className="bg-white text-black px-11 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Get Started
                            </button>
                            <button className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-11 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/20 transition-all">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-container-low py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-4xl font-black tracking-tight mb-4">Core Services</h2>
                            <div className="w-20 h-1 bg-primary"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-10 text-primary group-hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined text-5xl" data-icon="web">web</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">Web &amp; Frontend</h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary/70 mb-8 leading-relaxed">
                                    Bespoke web experiences built with React and Next.js, prioritizing performance and user-centric design patterns.
                                </p>
                                <div className="text-xs font-black tracking-widest uppercase group-hover:text-on-primary">Explore Dev</div>
                            </div>

                            <div className="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-10 text-primary group-hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined text-5xl" data-icon="brush">brush</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">Graphic Design</h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary/70 mb-8 leading-relaxed">
                                    Impactful visual storytelling through premium branding, corporate presentations, and strategic poster design.
                                </p>
                                <div className="text-xs font-black tracking-widest uppercase group-hover:text-on-primary">View Designs</div>
                            </div>

                            <div className="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-10 text-primary group-hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined text-5xl" data-icon="inventory_2">inventory_2</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">Merchandise</h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary/70 mb-8 leading-relaxed">
                                    Curated corporate gifts and apparel that resonate. From lanyards to premium brand toolkits for your team.
                                </p>
                                <div className="text-xs font-black tracking-widest uppercase group-hover:text-on-primary">Catalog</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">
                                Our Modern <br />Approach
                            </h2>
                            <div className="bg-surface-container h-80 w-full overflow-hidden relative">
                                <img alt="Professional architectural studio" className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-700" data-alt="Monochrome close-up of a high-end architect's studio with clean lines, white desk, and minimalist design tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiTNOV9F4H25Aspo-Jn_UuCdvZnVPixP4IBfHG9AnEsnOhBgfo3BbJg57cExVRzHGO7FOE1O89BqNnqGUu2t4n7hpFvbZM9h9ejlJLfHhhQ_2Ix8_GljT0DJimdARNW6pToVAzPNq-9K3BwIXQ9B4cfkPE94d79TUbYXkzXTa2uwdIgz2MATUL4NLpohmjDp6yNigM7ZmojdrPU75pUjktnV0Lsu5SaWa52GyRX_dIu3jaBFeczS6B5Bwr45a-W4I4dA4zP7hqWxI-" />
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-16">
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

                <section className="bg-primary text-on-primary py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-end mb-20">
                            <div>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-4 block">Case Studies</span>
                                <h2 className="text-4xl font-black tracking-tight">Selected Work</h2>
                            </div>
                            <div className="hidden md:block">
                                <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity">
                                    View All Projects
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                            <div className="group cursor-pointer">
                                <div className="aspect-16/10 bg-zinc-900 mb-8 overflow-hidden">
                                    <img alt="Branding project" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist black and white luxury brand identity layout with sleek typography on high-quality stationery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMzqCC_1qWzb_SWZCJEYI1ycGgOpksNqhDM2ebblGqjBcvKMtQaHELvI1kBl-oGCSShgZwKbJRlKqB9FEbKl-xhUs-P3f2QeBwpEBdGCRUXLLHU4ZLKDaM_nnVxiQpCL9Yk5gSpfDv2peSGdqk6-KkGPuVbQEiRB60PffDENQ61MiT-CvRiMHBA8XTL1tw8f_wSamf0YYMNaFBbGXzfnnktbxZhP_eSat5IoV-UERy8Yl74kO5ug7BGAp0PtWWHBHm9APMVcmRHKbI" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Luxury Branding</h3>
                                    <span className="text-sm opacity-50 font-medium">2023</span>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="aspect-16/10 bg-zinc-900 mb-8 overflow-hidden">
                                    <img alt="Dashboard design" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="Clean software interface design on a desktop monitor in a dark room with dramatic soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuNDd9zcgDh-lTf6CfvGUBcJ-5U5AY8j2zQ4bTFR6qmMEe194S458GZ6mdti9Zd3rsZo96WXYj4cIdrepPorg0s6Oz1J3UC1aqzofWIlCQMx6n-xn1KR1cYgZHHHMG02aCA06qf1kh1fHwoD6qH_Itfww8mDcCzNtLaTq6C4V8NebtJnCIh2kphld6_l1rMwaJ6xKfJSWeIMNZ_EBPOt3xPMeZqdZiszAF9f2j5PbkH7gQ4Ks1qjH_NT_BjebBCRrBnrNgq8amOgvc" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">SaaS Dashboard</h3>
                                    <span className="text-sm opacity-50 font-medium">2024</span>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="aspect-16/10 bg-zinc-900 mb-8 overflow-hidden">
                                    <img alt="Festival posters" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="A series of abstract monochrome posters displayed in a gallery setting with strong shadows and clean geometry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjX0GUxGW6_L8Pa9LntmmoVh-5reX8Hji1ctb5TCuyA82ncxXincpinDCk4Rw4YngQ3CCncRaw_ZzpfOghBwPIQm15TGNdopjp-McFHRnnXpTCaJ95JBNWoLC-2YLFG-T2p3BwZ3P1y7_0Rh07IWlRsx3OpTeWr4YLB7keHhC7KnpXCR0qmNpqkV6ejpV1-7eJpG0AzJ5blL1ROK7t_twdXwcwBtTOeqLTN9aH23_0l5HUbYqlJ8_BuDr_kW48rkLqZBKPUMnO_Ly5" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Posters for Music Festival</h3>
                                    <span className="text-sm opacity-50 font-medium">2023</span>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="aspect-16/10 bg-zinc-900 mb-8 overflow-hidden">
                                    <img alt="Web Development" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="Close up of high-end laptop screen showing sophisticated code structure in a dark moody workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzMCwRvNcAuYOtYzEX5uyq7WyGpRk2J70WWnEU9b_mZVSvrUuaTMDgdx_c9gnkuVm-HHjHfiSuu1W2Yr4PH9Q8n3yeEAsne_ljPsce73ZpIjr3rDSI18QNmnNVNnlosz8waVFSSF1pruB8mKAARgrTVF4uo4EfQbUiLoXTPn4MyOmusrZkpu2SxA0djBkewHAWwBT2silsItYB9p5Ug1tkt3oteoUZBCeHJrdKbizeyMVic5BdFxl6G9UdqbE-YSc4DADl7NGbDwjO" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold tracking-tight">Corporate Identity</h3>
                                    <span className="text-sm opacity-50 font-medium">2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8 max-w-7xl mx-auto text-center">
                    <div className="mb-20 max-w-2xl mx-auto">
                        <h2 className="text-5xl font-black tracking-tighter mb-6">The Team Behind Visualin</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            A collective of designers, developers, and strategists dedicated to pushing the boundaries of the digital landscape.
                        </p>
                    </div>
                    <div className="relative w-full aspect-21/9 bg-surface-container-low overflow-hidden">
                        <img alt="Visualin Team" className="w-full h-full object-cover grayscale brightness-95" data-alt="Professional diverse creative team working in a minimalist high-ceiling studio with large windows and industrial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZKteJ16_xOTQsW1nCAKlddkDxjFouDYA8YzmqMQSbXRlIHvG9vG6NR_KoCHLB108HfwIu9HSIkmBsdguQJ6zKxRhBGI9Hye9DxNhklX3axJKKMgQLDe_rDqpf95PK8UL1RmNTwKS4V9Ovmfk8uuexqtGC3YcPfoYJBPr-iMyX4CBdCVDl2oNJsv7M3Wdq8NDAZiD1aEwoMDTHnLqFX02G30PQlCR7guc-BLU9FjKZLnCdEMOKBt5W4LPrP5uYRJNQr-cWLUU4lwAu" />
                        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-20"></div>
                    </div>
                </section>
            </main>

            <footer className="w-full py-20 px-8 bg-zinc-50 dark:bg-zinc-950">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl font-black text-black dark:text-white mb-4 block">Visualin</span>
                        <p className="text-zinc-500 dark:text-zinc-400 font-['Inter'] text-sm leading-relaxed max-w-xs">
                            Building the future of digital architecture, one pixel at a time.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-6">Menu</h4>
                        <ul className="space-y-4">
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Services</a></li>
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Portfolio</a></li>
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">About</a></li>
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-6">Contact</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                            studio@visualin.agency<br />
                            1245 Design Ave, New York
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="font-['Inter'] text-sm text-zinc-500 dark:text-zinc-400">© 2024 Visualin. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
