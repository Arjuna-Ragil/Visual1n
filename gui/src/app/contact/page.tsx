export default function ContactPage() {
  return (
    <>
      
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl flex justify-between items-center px-8 py-6 w-full max-w-none">
<div className="text-2xl font-black text-black dark:text-white tracking-[0.2em] uppercase">VISUALIN</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-black dark:text-white hover:opacity-60 transition-opacity duration-300 cursor-pointer">menu</span>
</div>
</nav>

<main className="w-full max-w-md px-6 pt-32 pb-24 flex flex-col items-center">

<section className="flex flex-col items-center mb-16 text-center">
<div className="w-24 h-24 bg-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-white text-5xl" data-icon="architecture">architecture</span>
</div>
<h1 className="text-3xl font-black tracking-tighter uppercase mb-2">VISUALIN</h1>
<p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium">Minimalist Design Solutions</p>
</section>

<section className="w-full space-y-4">

<div className="grid grid-cols-2 gap-4 h-48">

<a className="group relative bg-surface-container-lowest border border-black/5 flex flex-col justify-end p-6 hover:bg-primary transition-all duration-500 overflow-hidden" href="#">
<span className="material-symbols-outlined text-black/50 group-hover:text-white/50 transition-colors absolute top-6 right-6" data-icon="language">language</span>
<span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black group-hover:text-white transition-colors">Main Website</span>
</a>

<a className="group relative bg-surface-container-lowest border border-black/5 flex flex-col justify-end p-6 hover:bg-primary transition-all duration-500 overflow-hidden" href="#">
<span className="material-symbols-outlined text-black/50 group-hover:text-white/50 transition-colors absolute top-6 right-6" data-icon="camera">camera</span>
<span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black group-hover:text-white transition-colors">Instagram</span>
</a>
</div>

<a className="group relative bg-surface-container-lowest border border-black/5 h-24 flex items-center justify-between px-8 hover:bg-primary transition-all duration-500 overflow-hidden" href="#">
<span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black group-hover:text-white transition-colors">WhatsApp Business</span>
<span className="material-symbols-outlined text-black/50 group-hover:text-white/50 transition-colors" data-icon="chat">chat</span>
</a>

<a className="group relative bg-surface-container-lowest border border-black/5 h-24 flex items-center justify-between px-8 hover:bg-primary transition-all duration-500 overflow-hidden" href="#">
<span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black group-hover:text-white transition-colors">Direct Email</span>
<span className="material-symbols-outlined text-black/50 group-hover:text-white/50 transition-colors" data-icon="mail">mail</span>
</a>
</section>

<section className="mt-12 w-full">
<div className="relative w-full aspect-video bg-surface-container-low overflow-hidden">
<img alt="Featured Work" className="w-full h-full object-cover grayscale contrast-125 brightness-90 opacity-80" data-alt="Monochrome minimalist architectural interior with harsh shadows and dramatic geometric lines in black and white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObDkAIkwljxIdNoWvAd2K8BbwFn34JG4Ut12-WcAy1RvjalqRM-bcOdo69wZIcy048zvKgrnmNeXEq_zIc8cBNsr9tdVv1pazY4aN3amm3V3Q1BAuBwNmYOB_ecGp-OznqwGaOWHgBf2jAHfn6ShRZgGBgu45b9OeKX_N0xLUqxo4XLLtstWJiGN_D5sOy0KZVcUaZd-ghrvD0PnpSO14unUViGlh0TvocOiBbgZm25UDUQKRNZ7cagFDTU5F6Br3wCtx7bR8YHRX"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-[10px] text-white uppercase tracking-widest font-bold">View Portfolio</p>
</div>
</div>
</section>

<section className="mt-20 text-center px-4">
<h2 className="text-xl font-bold tracking-tighter leading-tight mb-4 italic">"Design That Defines, Code That Delivers"</h2>
<div className="w-12 h-[2px] bg-primary mx-auto"></div>
</section>
</main>

<footer className="w-full py-12 bg-[#f9f9ff] dark:bg-black flex flex-col items-center gap-4 px-8 mt-auto">
<div className="text-black dark:text-white font-black tracking-[0.15em] text-xs uppercase">VISUALIN</div>
<div className="flex gap-6">
<a className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors" href="#">Privacy</a>
<a className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors" href="#">Terms</a>
</div>
<p className="font-['Inter'] text-[10px] uppercase tracking-[0.15em] font-medium text-black/40 dark:text-white/40">© 2026 VISUALIN ARCHITECTS</p>
</footer>
    </>
  );
}
