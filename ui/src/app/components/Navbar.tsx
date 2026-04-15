import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-4 px-4 sm:px-8">
            <nav className="pointer-events-auto w-full max-w-5xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-center mx-auto px-6 py-3">
                    <Link href="#hero">
                        <Image src="/V1SUALIN LIGHT.png" alt="Visualin Logo" width={250} height={60} className="w-auto object-contain h-6 md:h-8" priority />
                    </Link>

                    <div className="hidden md:flex items-center gap-8 lg:gap-10">
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-200 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors" href="#hero">Home</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-200 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors" href="#about">About</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-200 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors" href="#portfolio">Portfolio</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-200 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors" href="#services">Services</a>
                        <a className="font-['Inter'] font-medium text-sm tracking-tight text-zinc-200 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors" href="#team">Team</a>
                    </div>
                    <Link href="/contact" className="bg-primary text-on-primary font-bold tracking-tight hover:opacity-70 transition-all active:scale-95 duration-200 ease-in-out whitespace-nowrap px-6 py-2.5 text-xs rounded-full">
                        Contact Us
                    </Link>
                </div>
            </nav>
        </div>
    );
}
