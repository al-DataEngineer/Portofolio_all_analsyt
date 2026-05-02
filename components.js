/**
 * Ahmad Alimin Portfolio - Shared Components
 * This file replaces the need for 'fetch' to load navbar and footer,
 * ensuring it works perfectly on GitHub Pages and local files.
 */

const NavbarHTML = `
<nav class="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-outline-variant/10">
    <div class="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto font-manrope tracking-tight">
        <a href="index.html" id="main-logo" class="text-lg font-bold tracking-tighter text-on-surface italic">Ahmad Alimin</a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8 text-sm">
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="index.html">Beranda</a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="projects.html">Proyek</a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="certifications.html">Sertifikasi</a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors flex items-center gap-1" href="stories.html">
                Stories <span class="material-symbols-outlined text-[14px]">lock</span>
            </a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="notes.html">Notes</a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="about.html">Tentang</a>
            <a class="nav-link text-slate-500 hover:text-slate-800 duration-300 transition-colors" href="contact.html">Kontak</a>
            <a href="contact.html" class="bg-primary text-on-primary px-5 py-2 rounded-md hover:bg-primary-dim transition-all font-bold">Hubungi Saya</a>
        </div>

        <!-- Mobile Controller -->
        <button id="menu-toggle" class="md:hidden flex flex-col gap-[4px] p-3 text-slate-800 dark:text-white focus:outline-none relative z-[80]" aria-label="Toggle Menu">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </button>
    </div>
</nav>

<div id="mobile-menu" class="fixed inset-y-0 right-0 w-full z-[60] flex translate-x-full opacity-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-slate-50/98 dark:bg-slate-950/98 backdrop-blur-3xl flex-col justify-center items-center overflow-hidden">
    <button id="close-menu-btn" class="absolute top-6 right-6 md:hidden w-12 h-12 bg-white/30 dark:bg-slate-800/30 border border-slate-200/50 dark:border-slate-700/50 rounded-full flex items-center justify-center text-slate-800 dark:text-white hover:bg-white transition-colors shadow-lg active:scale-95 z-10 backdrop-blur-md">
        <span class="material-symbols-outlined text-2xl">close</span>
    </button>
    <div class="flex flex-col items-center gap-8 w-full px-6 mt-20">
        <a class="nav-item text-4xl font-headline font-black text-slate-800 dark:text-slate-100 tracking-tight hover:scale-105 transition-transform" href="index.html">Beranda</a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all" href="projects.html">Proyek</a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all" href="certifications.html">Sertifikasi</a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all flex items-center gap-3" href="stories.html">
            Stories <span class="material-symbols-outlined text-2xl">lock</span>
        </a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all" href="notes.html">Notes</a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all" href="about.html">Tentang</a>
        <a class="nav-item text-4xl font-headline font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-all" href="contact.html">Kontak</a>
    </div>
</div>
`;

const FooterHTML = `
<footer class="w-full py-12 bg-slate-100 dark:bg-slate-950 text-sm">
    <div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
        <p class="text-slate-500 italic">© 2024 Ahmad Alimin. Build with Precision.</p>
        <div class="flex gap-8">
            <a class="text-slate-500 hover:text-slate-900" href="#">GitHub</a>
            <a class="text-slate-500 hover:text-slate-900" href="#">LinkedIn</a>
        </div>
    </div>
</footer>
`;

function injectComponents() {
    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');

    if (header) header.innerHTML = NavbarHTML;
    if (footer) footer.innerHTML = FooterHTML;
}

// Auto-inject when script loads
injectComponents();
