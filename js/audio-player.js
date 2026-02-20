/* ============================================ */
/* ADIP RMX - AUDIO PLAYER SYSTEM */
/* ============================================ */

/* 
   CARA KERJA AUDIO PLAYER:
   
   1. User klik tombol play -> audio mulai diputar
   2. Waveform animasi mengikuti beat (simulasi)
   3. Klik lagi -> audio pause
   4. Hanya 1 audio yang bisa play dalam 1 waktu
   
   UNTUK MENAMBAH AUDIO:
   - Taruh file MP3 di folder assets/audio/
   - Update path di products.js
   
   CATATAN: File audio harus dalam format MP3
   dan ukurannya sebaiknya di bawah 1MB untuk 
   loading yang cepat.
*/

// ============================================
// AUDIO PLAYER STATE
// ============================================
let currentAudio = null;
let currentPlayBtn = null;
let isPlaying = false;

// ============================================
// INITIALIZE AUDIO PLAYERS
// ============================================
function initAudioPlayers() {
    // Generate waveform bars untuk semua player
    const waveformContainers = document.querySelectorAll('.waveform-bar');
    waveformContainers.forEach(container => {
        generateWaveformBars(container);
    });
    
    // Setup play buttons
    setupPlayButtons();
}

// ============================================
// GENERATE WAVEFORM BARS
// ============================================
function generateWaveformBars(container) {
    const barCount = 30;
    let html = '';
    
    for (let i = 0; i < barCount; i++) {
        // Random height untuk variasi waveform
        const height = Math.floor(Math.random() * 60) + 20;
        html += `<span style="height: ${height}%"></span>`;
    }
    
    container.innerHTML = html;
}

// ============================================
// SETUP PLAY BUTTONS
// ============================================
function setupPlayButtons() {
    document.addEventListener('click', function(e) {
        const playBtn = e.target.closest('.play-btn');
        if (!playBtn) return;
        
        const audioSrc = playBtn.dataset.audio;
        if (!audioSrc) return;
        
        // Jika ada audio yang sedang play dan beda tombol
        if (currentAudio && currentPlayBtn && currentPlayBtn !== playBtn) {
            stopCurrentAudio();
        }
        
        // Jika tombol yang sama diklik
        if (currentPlayBtn === playBtn) {
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
            return;
        }
        
        // Play audio baru
        playNewAudio(audioSrc, playBtn);
    });
}

// ============================================
// PLAY NEW AUDIO
// ============================================
function playNewAudio(src, btn) {
    // Buat audio element baru
    currentAudio = new Audio(src);
    currentPlayBtn = btn;
    
    // Event listeners
    currentAudio.addEventListener('ended', function() {
        stopCurrentAudio();
    });
    
    currentAudio.addEventListener('error', function() {
        console.error('Error loading audio:', src);
        showToast('Audio tidak dapat dimuat');
        stopCurrentAudio();
    });
    
    // Play audio
    currentAudio.play().then(() => {
        isPlaying = true;
        updatePlayButtonState(true);
        animateWaveform(true);
    }).catch(err => {
        console.error('Error playing audio:', err);
        showToast('Gagal memutar audio');
        stopCurrentAudio();
    });
}

// ============================================
// PLAY AUDIO (resume)
// ============================================
function playAudio() {
    if (currentAudio) {
        currentAudio.play();
        isPlaying = true;
        updatePlayButtonState(true);
        animateWaveform(true);
    }
}

// ============================================
// PAUSE AUDIO
// ============================================
function pauseAudio() {
    if (currentAudio) {
        currentAudio.pause();
        isPlaying = false;
        updatePlayButtonState(false);
        animateWaveform(false);
    }
}

// ============================================
// STOP CURRENT AUDIO
// ============================================
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    isPlaying = false;
    updatePlayButtonState(false);
    animateWaveform(false);
    currentPlayBtn = null;
}

// ============================================
// UPDATE PLAY BUTTON STATE
// ============================================
function updatePlayButtonState(playing) {
    if (!currentPlayBtn) return;
    
    const icon = currentPlayBtn.querySelector('i');
    if (!icon) return;
    
    if (playing) {
        currentPlayBtn.classList.add('playing');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        currentPlayBtn.classList.remove('playing');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

// ============================================
// ANIMATE WAVEFORM
// ============================================
function animateWaveform(animate) {
    if (!currentPlayBtn) return;
    
    const container = currentPlayBtn.closest('.bg-background, .product-card, .sample-card');
    if (!container) return;
    
    const waveformBar = container.querySelector('.waveform-bar');
    if (!waveformBar) return;
    
    const bars = waveformBar.querySelectorAll('span');
    
    if (animate) {
        bars.forEach((bar, index) => {
            // Random delay untuk efek yang lebih natural
            const delay = Math.random() * 0.5;
            bar.style.animationDelay = `${delay}s`;
            bar.classList.add('active');
        });
    } else {
        bars.forEach(bar => {
            bar.classList.remove('active');
            bar.style.animationDelay = '0s';
        });
    }
}

// ============================================
// CREATE AUDIO PLAYER HTML
// ============================================
function createAudioPlayer(audioSrc, previewTime = '0:30') {
    return `
        <div class="bg-background p-4 rounded-xl">
            <div class="flex items-center gap-4">
                <button class="play-btn w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" data-audio="${audioSrc}">
                    <i class="fas fa-play ml-1"></i>
                </button>
                <div class="flex-1">
                    <div class="waveform-bar flex items-center gap-1 h-8"></div>
                </div>
                <span class="text-sm text-text-gray preview-time">${previewTime}</span>
            </div>
        </div>
    `;
}

// ============================================
// STOP ALL AUDIO ON PAGE HIDE
// ============================================
document.addEventListener('visibilitychange', function() {
    if (document.hidden && isPlaying) {
        pauseAudio();
    }
});

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', initAudioPlayers);
