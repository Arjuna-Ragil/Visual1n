import Aurora from '../components/Aurora';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black">
        <Aurora colorStops={["#ffffff", "#6b6b6b", "#000000"]} blend={0.6} amplitude={1.0} speed={0.5} />
      </div>

      <main className="w-full max-w-md mx-auto my-6 md:my-10 px-8 pt-12 pb-8 flex flex-col items-center relative z-10 bg-white/5 border border-white/20 backdrop-blur-2xl rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/10">

        <section className="flex flex-col items-center mb-12 text-center">
          <div className="mb-4 pointer-events-none">
            <Image src="/V1SUALIN LIGHT.png" alt="Visualin Logo" width={350} height={80} className="h-16 w-auto object-contain drop-shadow-md opacity-95" priority />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 mt-2">MINIMALIST DESIGN SOLUTIONS</p>
        </section>

        <section className="w-full space-y-4">

          <div className="grid grid-cols-2 gap-4 h-48">

            <a className="group relative bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-end p-6 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden backdrop-blur-sm" href="/">
              <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors absolute top-6 right-6" data-icon="language">language</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/80 group-hover:text-white transition-colors">Main Website</span>
            </a>

            <a className="group relative bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-end p-6 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden backdrop-blur-sm" href="https://www.instagram.com/v1sualin/" target='_blank'>
              <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors absolute top-6 right-6" data-icon="camera">camera</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/80 group-hover:text-white transition-colors">Instagram</span>
            </a>
          </div>

          <a className="group relative bg-white/5 border border-white/10 rounded-2xl h-24 flex items-center justify-between px-8 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden backdrop-blur-sm" href="https://wa.me/6283142551365" target='_blank'>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/80 group-hover:text-white transition-colors">WhatsApp business</span>
            <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors" data-icon="phone">phone</span>
          </a>
          <a className="group relative bg-white/5 border border-white/10 rounded-2xl h-24 flex items-center justify-between px-8 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden backdrop-blur-sm" href="mailto:v1sualin.desain@gmail.com">
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/80 group-hover:text-white transition-colors">Direct Email</span>
            <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors" data-icon="mail">mail</span>
          </a>
        </section>

        <a href="/v1sualin%20port.pdf" target="_blank" rel="noopener noreferrer" className="mt-12 w-full block shadow-lg rounded-2xl group hover:shadow-2xl transition-all duration-500 border border-white/10 overflow-hidden">
          <div className="relative w-full aspect-video bg-black overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors duration-500">
            <Image src="/v1sualin port cover.svg" alt="Visualin Portfolio Cover" fill className="object-cover blur-[3px] opacity-70 group-hover:opacity-60 transition-opacity duration-500 transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[1px]"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-[11px] text-white uppercase tracking-widest font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </p>
            </div>
          </div>
        </a>

        <section className="mt-10 text-center px-4">
          <h2 className="text-xl font-medium tracking-tighter leading-tight mb-4 italic text-white/90">"Design That Defines, Code That Delivers"</h2>
          <div className="w-12 h-[2px] bg-white/30 mx-auto"></div>
        </section>
      </main>

      <footer className="w-full py-6 flex flex-col items-center gap-4 px-8 mt-auto relative z-10">
        <div className="text-white/80 font-black tracking-[0.15em] text-xs uppercase">V1SUALIN</div>
        <div className="flex gap-6">
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-white/50 hover:text-white transition-colors" href="#">Privacy</a>
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-white/50 hover:text-white transition-colors" href="#">Terms</a>
        </div>
        <p className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-white/50">© 2026 V1SUALIN ARCHITECTS</p>
      </footer>
    </>
  );
}
