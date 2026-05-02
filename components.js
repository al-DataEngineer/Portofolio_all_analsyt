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
<footer class="w-full bg-slate-900 text-slate-400">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
        <!-- Top Section -->
        <div class="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800">
            <!-- Brand -->
            <div class="md:col-span-2">
                <a href="index.html" class="text-2xl font-headline font-black text-white tracking-tighter italic mb-4 block">Ahmad Alimin</a>
                <p class="text-sm leading-relaxed max-w-xs opacity-70">Data Scientist & Praktisi Machine Learning berbasis di Pekalongan, Indonesia. Mentransformasi data menjadi wawasan strategis.</p>
                <div class="flex gap-4 mt-6">
                    <a href="https://github.com/al-DataEngineer" target="_blank" class="w-10 h-10 bg-slate-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-alimin-186991394" target="_blank" class="w-10 h-10 bg-slate-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                    </a>
                    <a href="mailto:ahmadalimin700@gmail.com" class="w-10 h-10 bg-slate-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                    </a>
                </div>
            </div>
            <!-- Quick Nav -->
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigasi</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="index.html" class="hover:text-white transition-colors">Beranda</a></li>
                    <li><a href="about.html" class="hover:text-white transition-colors">Tentang</a></li>
                    <li><a href="projects.html" class="hover:text-white transition-colors">Proyek</a></li>
                    <li><a href="certifications.html" class="hover:text-white transition-colors">Sertifikasi</a></li>
                    <li><a href="contact.html" class="hover:text-white transition-colors">Kontak</a></li>
                </ul>
            </div>
            <!-- Contact Info -->
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-6">Kontak</h4>
                <ul class="space-y-3 text-sm">
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px] text-primary">mail</span> ahmadalimin700@gmail.com</li>
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px] text-primary">location_on</span> Pekalongan, Indonesia</li>
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px] text-primary">school</span> UIN K.H. Abdurrahman Wahid</li>
                </ul>
            </div>
        </div>
        <!-- Bottom Bar -->
        <div class="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p class="opacity-50">&copy; 2025 Ahmad Alimin. All rights reserved.</p>
            <p class="opacity-50 italic">Built with precision and attention to detail.</p>
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
