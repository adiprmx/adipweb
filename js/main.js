/* ============================================ */
/* ADIP RMX - MAIN JAVASCRIPT */
/* ============================================ */

/* 
   FILE INI BERISI:
   - Animasi scroll dengan GSAP
   - Render produk ke HTML
   - Mobile menu toggle
   - Lightbox functionality
   - Copy to clipboard
   - Form handling
   - Dan berbagai utility functions
   
   UNTUK MENGUBAH ANIMASI:
   - Cari bagian GSAP animations
   - Sesuaikan duration, delay, dan easing
*/

// ============================================
// WAIT FOR DOM
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize semua komponen
    initNavbar();
    initMobileMenu();
    renderProducts();
    renderSamplePacks();
    initAnimations();
    initScrollEffects();
    initLightbox();
    initCopyButtons();
    initRequestForm();
    initLoadMoreButton();
    initFavorites();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
    });
    
    // Close menu when clicking a link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// ============================================
// RENDER FLM PRODUCTS
// ============================================
function renderProducts() {
    const grid = document.getElementById('flm-grid');
    if (!grid) return;
    
    // Render first 8 products
    const productsToShow = flmProducts.slice(0, 8);
    
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="product-image relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <span class="genre-badge ${getGenreBadgeClass(product.genre)}">${product.genre}</span>
                <div class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button class="play-btn w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" data-audio="${product.audio}">
                        <i class="fas fa-play ml-1"></i>
                    </button>
                </div>
            </div>
            <div class="p-5">
                <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
                <div class="flex items-center gap-2 text-sm text-text-gray mb-3">
                    <i class="fas fa-drum"></i>
                    <span>${product.bpm} BPM</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold">${formatPrice(product.price)}</span>
                    <button class="add-to-cart w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors" 
                            data-product="${product.name}" 
                            data-price="${product.price}" 
                            data-type="FLM">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize audio players for new elements
    initAudioPlayers();
}

// ============================================
// RENDER SAMPLE PACKS
// ============================================
function renderSamplePacks() {
    const grid = document.getElementById('sample-grid');
    if (!grid) return;
    
    // Render first 10 sample packs
    const packsToShow = samplePacks.slice(0, 10);
    
    grid.innerHTML = packsToShow.map(pack => `
        <div class="sample-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="relative">
                <img src="${pack.image}" alt="${pack.name}" class="w-full h-40 object-cover">
                <div class="play-overlay absolute inset-0 bg-black/60 flex items-center justify-center">
                    <button class="play-btn w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" data-audio="${pack.audio}">
                        <i class="fas fa-play ml-1"></i>
                    </button>
                </div>
                <span class="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">${pack.category}</span>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-sm mb-1 truncate">${pack.name}</h3>
                <p class="text-xs text-text-gray mb-3 line-clamp-2">${pack.description}</p>
                <div class="flex items-center justify-between">
                    <span class="font-bold">${formatPrice(pack.price)}</span>
                    <button class="add-to-cart w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors text-sm" 
                            data-product="${pack.name}" 
                            data-price="${pack.price}" 
                            data-type="Sample Pack">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize audio players
    initAudioPlayers();
}

// ============================================
// LOAD MORE BUTTON
// ============================================
function initLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-flm');
    if (!loadMoreBtn) return;
    
    let showingAll = false;
    
    loadMoreBtn.addEventListener('click', function() {
        const grid = document.getElementById('flm-grid');
        if (!grid) return;
        
        if (!showingAll) {
            // Show all products
            grid.innerHTML = flmProducts.map(product => `
                <div class="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="product-image relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                        <span class="genre-badge ${getGenreBadgeClass(product.genre)}">${product.genre}</span>
                        <div class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button class="play-btn w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" data-audio="${product.audio}">
                                <i class="fas fa-play ml-1"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
                        <div class="flex items-center gap-2 text-sm text-text-gray mb-3">
                            <i class="fas fa-drum"></i>
                            <span>${product.bpm} BPM</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold">${formatPrice(product.price)}</span>
                            <button class="add-to-cart w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors" 
                                    data-product="${product.name}" 
                                    data-price="${product.price}" 
                                    data-type="FLM">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            loadMoreBtn.innerHTML = `
                <i class="fas fa-chevron-up"></i>
                Tampilkan Lebih Sedikit
            `;
            showingAll = true;
        } else {
            // Show only first 8
            renderProducts();
            loadMoreBtn.innerHTML = `
                Lihat Semua FLM
                <i class="fas fa-chevron-down"></i>
            `;
            showingAll = false;
        }
        
        // Re-initialize audio players
        initAudioPlayers();
        
        // Scroll ke grid
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ============================================
// GSAP ANIMATIONS
// ============================================
function initAnimations() {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    gsap.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'expo.out',
        delay: 0.3
    });
    
    gsap.to('.stat-item', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.8
    });
    
    gsap.to('.main-image', {
        opacity: 1,
        rotateY: 0,
        x: 0,
        duration: 1,
        ease: 'expo.out',
        delay: 0.5
    });
    
    gsap.to('.secondary-image-1, .secondary-image-2', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'expo.out',
        delay: 0.8
    });
    
    // Feature cards animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'expo.out'
        });
    });
    
    // Product cards animation
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'expo.out'
        });
    });
    
    // Sample cards animation
    gsap.utils.toArray('.sample-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.05,
            ease: 'expo.out'
        });
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'expo.out'
        });
    });
    
    // Testimonial cards animation
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'expo.out'
        });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
    // Lightbox functions are global
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.dataset.copy;
            if (!textToCopy) return;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show feedback
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Tersalin';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
                
                showToast('Nomor rekening tersalin');
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast('Gagal menyalin');
            });
        });
    });
}

// ============================================
// REQUEST FORM
// ============================================
function initRequestForm() {
    const form = document.getElementById('request-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Generate WhatsApp message
        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        const timeStr = now.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        let message = `*REQUEST CUSTOM BEAT*\n`;
        message += `===================\n\n`;
        message += `*Tanggal:* ${dateStr}\n`;
        message += `*Jam:* ${timeStr}\n\n`;
        message += `*DATA PEMESAN:*\n`;
        message += `Nama: ${data.name}\n`;
        message += `WhatsApp: ${data.whatsapp}\n\n`;
        message += `*DETAIL REQUEST:*\n`;
        message += `Genre: ${data.genre}\n`;
        message += `Referensi: ${data.reference || '-'}\n`;
        message += `Detail: ${data.detail}\n`;
        message += `Budget: ${data.budget}\n\n`;
        message += `===================\n`;
        message += `Mohon konfirmasi ketersediaan dan estimasi waktu pengerjaan. Terima kasih!`;
        
        // Open WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        
        // Reset form
        form.reset();
        
        showToast('Request terkirim!');
    });
}

// ============================================
// WAVEFORM CANVAS ANIMATION (Hero Background)
// ============================================
function initWaveformCanvas() {
    const canvas = document.getElementById('waveform-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const waves = 5;
        const amplitude = 30;
        const frequency = 0.01;
        
        for (let i = 0; i < waves; i++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 + i * 0.02})`;
            ctx.lineWidth = 2;
            
            for (let x = 0; x < canvas.width; x += 5) {
                const y = canvas.height / 2 + 
                         Math.sin(x * frequency + time + i * 0.5) * amplitude * (i + 1) / waves +
                         Math.sin(x * frequency * 2 + time * 1.5 + i) * amplitude * 0.5;
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.stroke();
        }
        
        time += 0.02;
        animationId = requestAnimationFrame(draw);
    }
    
    resize();
    draw();
    
    window.addEventListener('resize', resize);
    
    // Stop animation when tab is hidden
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            draw();
        }
    });
}

// Initialize waveform canvas
document.addEventListener('DOMContentLoaded', initWaveformCanvas);

// ============================================
// FAVORITE BUTTONS
// ============================================
function initFavorites() {
    // Load favorites dari localStorage
    let favorites = JSON.parse(localStorage.getItem('adipRmxFavorites') || '[]');
    
    // Update tampilan tombol favorite yang sudah tersimpan
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const product = btn.dataset.product;
        if (favorites.includes(product)) {
            btn.classList.add('active');
            btn.classList.add('border-red-500', 'text-red-500');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
        }
        
        // Tambahkan event listener
        btn.addEventListener('click', function() {
            const product = this.dataset.product;
            const icon = this.querySelector('i');
            
            if (this.classList.contains('active')) {
                // Remove from favorites
                favorites = favorites.filter(fav => fav !== product);
                this.classList.remove('active');
                this.classList.remove('border-red-500', 'text-red-500');
                if (icon) {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
                showToast('Dihapus dari favorit');
            } else {
                // Add to favorites
                favorites.push(product);
                this.classList.add('active');
                this.classList.add('border-red-500', 'text-red-500');
                if (icon) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                }
                showToast('Ditambahkan ke favorit');
            }
            
            // Simpan ke localStorage
            localStorage.setItem('adipRmxFavorites', JSON.stringify(favorites));
        });
    });
}
