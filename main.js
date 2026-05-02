/**
 * Ahmad Alimin Portfolio - Master Bundle JS (Final Refined Version)
 * Combined Global, Component, and Page-specific logic.
 */

// Register GSAP Plugin
if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Shared Logic
    initNavigation();
    initRevealAnimations();
    initWhatsAppButton();
    markActiveLink();

    // 2. Page Specific Initialization
    if (document.getElementById('hero-section')) initHome();
    if (document.getElementById('lock-screen')) initStories();
    if (document.getElementById('projects-grid')) initProjects();
    if (document.getElementById('contact-form')) initContact();
    if (document.getElementById('cert-grid')) initCertifications();
    if (document.getElementById('quiz-form')) initQuiz();
});

/* ==========================================
   GLOBAL LOGIC
   ========================================== */

function markActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-item').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-slate-900', 'dark:text-white', 'font-black');
            link.classList.remove('text-slate-500');
        }
    });
}

function initNavigation() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!toggleBtn || !mobileMenu) return;

    const toggleMenu = () => {
        const isActive = mobileMenu.classList.contains('translate-x-0');
        toggleBtn.classList.toggle('active');
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('opacity-100');
        mobileMenu.classList.toggle('pointer-events-none');
        mobileMenu.classList.toggle('pointer-events-auto');

        mobileMenu.querySelectorAll('.nav-item').forEach(el => {
            el.style.transform = !isActive ? 'translateY(0)' : 'translateY(40px)';
            el.style.opacity = !isActive ? '1' : '0';
        });
    };

    toggleBtn.addEventListener('click', toggleMenu);
    document.getElementById('close-menu-btn')?.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => { if (toggleBtn.classList.contains('active')) toggleMenu(); });
    });
}

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initWhatsAppButton() {
    if (document.getElementById('wa-floating-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'wa-floating-btn';
    btn.onclick = () => {
        const phone = atob("NjI4NTI5MzQ0MTU1Mg==");
        const isMobile = /Android|webOS/i.test(navigator.userAgent);
        isMobile ? (window.location.href = "whatsapp://send?phone=" + phone) : window.open("https://web.whatsapp.com/send?phone=" + phone, "_blank");
    };
    btn.className = "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>`;
    document.body.appendChild(btn);
}

/* ==========================================
   PAGE LOGIC - HOME
   ========================================== */

function initHome() {
    if (typeof VANTA !== 'undefined' && VANTA.NET) {
        VANTA.NET({ el: "#vanta-container", mouseControls: true, touchControls: true, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1, color: 0x545f73, backgroundColor: 0xf7f9fb, points: 12, maxDistance: 22, spacing: 20, showDots: true });
    }
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        tl.to(".vanta-bg", { autoAlpha: 0.4, duration: 0.8 })
            .fromTo(".hero-content > *", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 }, "-=0.4")
            .fromTo(".hero-image-container", { scale: 0.95, autoAlpha: 0, y: 15 }, { scale: 1, autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
            .add(() => gsap.to(".hero-image-container img", { y: -12, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut" }));

        // Hero Parallax
        gsap.to("#vanta-container", {
            yPercent: 35,
            ease: "none",
            scrollTrigger: { trigger: "#hero-section", start: "top top", end: "bottom top", scrub: true }
        });

        // Stagger Reveals
        gsap.utils.toArray('.stagger-group').forEach(group => {
            gsap.fromTo(group.querySelectorAll('.stagger-item'), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.12, scrollTrigger: { trigger: group, start: "top 85%" } });
        });
    }
}

/**
 * Global function for philosophy section toggle
 */
window.openPhilosophySection = function () {
    const closed = document.getElementById('philosophy-closed');
    const opened = document.getElementById('philosophy-opened');
    if (!closed || !opened) return;

    closed.classList.add('opacity-0', 'scale-95', '-translate-y-8');
    closed.style.pointerEvents = 'none';
    setTimeout(() => {
        closed.classList.add('hidden');
        opened.classList.remove('hidden');
        opened.classList.add('opacity-0', 'translate-y-12');
        void opened.offsetWidth;
        opened.classList.remove('opacity-0', 'translate-y-12');
        opened.classList.add('opacity-100', 'translate-y-0');
    }, 500);
};

/* ==========================================
   PAGE LOGIC - STORIES
   ========================================== */

function initStories() {
    const lockScreen = document.getElementById('lock-screen');
    const authStatus = document.getElementById('auth-status');
    const mainContent = document.getElementById('main-content');
    const passInput = document.getElementById('story-pass-input');
    const submitBtn = document.getElementById('submit-pass-btn');
    const clearBtn = document.getElementById('clear-btn');
    const dataStream = document.getElementById('data-stream');
    const SECRET_KEY = "2025"; // Can be any string now

    if (typeof gsap !== 'undefined') {
        gsap.timeline().from("#lock-screen", { opacity: 0, duration: 1 }).from(".relative.mb-14", { scale: 0, opacity: 0, rotation: -180, duration: 0.8 }, "-=0.5");
    }

    if (dataStream) {
        dataStream.innerHTML = Array(500).fill(0).map(() => Math.floor(Math.random() * 2)).join('');
        setInterval(() => { if (dataStream) dataStream.innerText = dataStream.innerText.slice(1) + Math.floor(Math.random() * 2); }, 50);
    }

    const validate = () => {
        const input = passInput.value;
        if (!input) return;

        if (authStatus) authStatus.innerText = "AUTHENTICATING...";

        setTimeout(() => {
            if (input.toUpperCase() === SECRET_KEY.toUpperCase()) {
                if (authStatus) authStatus.innerText = "ACCESS GRANTED";
                gsap.to(lockScreen, {
                    opacity: 0, filter: "blur(20px)", scale: 1.1, duration: 1, onComplete: () => {
                        lockScreen.style.display = "none";
                        mainContent.classList.remove('hidden');
                        mainContent.classList.add('opacity-100', 'scale-100');
                        gsap.from("#main-content", { opacity: 0, y: 50, duration: 1 });
                        document.body.style.overflow = "auto";
                    }
                });
            } else {
                if (authStatus) authStatus.innerText = "ACCESS DENIED";
                lockScreen.animate([{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 200, iterations: 2 });
                passInput.value = "";
                setTimeout(() => { if (authStatus) authStatus.innerText = "Identity Required"; }, 1000);
            }
        }, 800);
    };

    passInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') validate();
    });

    submitBtn?.addEventListener('click', validate);
    clearBtn?.addEventListener('click', () => {
        if (passInput) passInput.value = "";
    });

    document.getElementById('face-id-btn')?.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const webcam = document.getElementById('webcam');
            if (webcam) webcam.srcObject = stream;
            document.getElementById('face-id-container')?.classList.remove('hidden');
            setTimeout(() => {
                stream.getTracks().forEach(t => t.stop());
                document.getElementById('face-id-container')?.classList.add('hidden');
                passInput.value = SECRET_KEY;
                validate();
            }, 3000);
        } catch (e) { if (authStatus) authStatus.innerText = "BIOMETRIC ERROR"; }
    });
}

/* ==========================================
   PAGE LOGIC - OTHER
   ========================================== */

function initProjects() { console.log("Projects Ready"); }

function initContact() {
    const trigger = document.getElementById('open-form-trigger');
    const modal = document.getElementById('message-modal');
    const backdrop = document.getElementById('message-backdrop');
    const content = document.getElementById('message-content');
    const closeBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('contact-form');
    const verifyDisplay = document.getElementById('verify-code-display');
    const verifyInput = document.getElementById('verify-input');
    const successModal = document.getElementById('success-modal');

    if (!trigger || !modal) return;

    let currentCode = "";
    const generateCode = () => {
        currentCode = Math.floor(100000 + Math.random() * 900000).toString();
        if (verifyDisplay) verifyDisplay.innerText = currentCode;
    };

    const openModal = () => {
        generateCode();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            backdrop.classList.replace('opacity-0', 'opacity-100');
            content.classList.replace('opacity-0', 'opacity-100');
            content.classList.replace('scale-95', 'scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        backdrop.classList.replace('opacity-100', 'opacity-0');
        content.classList.replace('opacity-100', 'opacity-0');
        content.classList.replace('scale-100', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
        document.body.style.overflow = 'auto';
    };

    trigger.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    verifyDisplay?.addEventListener('click', generateCode);

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (verifyInput.value !== currentCode) {
                alert("Kode verifikasi salah! Silakan coba lagi.");
                generateCode();
                verifyInput.value = "";
                return;
            }

            // Simulate sending
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Mengirim...';
            btn.disabled = true;

            setTimeout(() => {
                closeModal();
                if (successModal) {
                    successModal.classList.remove('hidden');
                    successModal.classList.add('flex');
                    setTimeout(() => {
                        successModal.querySelector('div').classList.replace('scale-95', 'scale-100');
                    }, 10);
                }
                form.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Global utility for success modal as it's called via onclick in HTML
    window.closeSuccessModal = function () {
        if (successModal) {
            successModal.querySelector('div').classList.replace('scale-100', 'scale-95');
            setTimeout(() => {
                successModal.classList.add('hidden');
                successModal.classList.remove('flex');
            }, 300);
        }
    };
}

function initCertifications() {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('modal-img');
    const modalInfo = document.getElementById('modal-info');
    if (!modal || !modalImg) return;

    document.querySelectorAll('.cert-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalImg.src = trigger.querySelector('img').src;
            document.getElementById('modal-title').innerText = trigger.getAttribute('data-title');
            document.getElementById('modal-issuer').innerText = `Issued by: ${trigger.getAttribute('data-issuer')}`;
            modal.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                modalImg.classList.remove('opacity-0', 'scale-90');
                modalImg.classList.add('scale-100');
                modalInfo.classList.remove('opacity-0', 'translate-y-10');
            }, 100);
        });
    });

    const closeModal = () => {
        modalImg.classList.add('opacity-0', 'scale-90');
        modalInfo.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => modal.classList.add('opacity-0', 'pointer-events-none'), 300);
    };

    document.getElementById('close-modal')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

function initQuiz() {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        let score = (data.get('q1') === 'A' ? 1 : 0) + (data.get('q2') === 'B' ? 1 : 0) + (data.get('q3') === 'C' ? 1 : 0);
        const perc = Math.round((score / 3) * 100);
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            document.getElementById('result-panel').classList.remove('hidden');
            document.getElementById('score-text').innerText = perc + "%";
            document.getElementById('feedback-desc').innerText = perc === 100 ? "Luar biasa! 🚀" : "Bagus! Terus belajar.";
        }, 300);
    });
}
