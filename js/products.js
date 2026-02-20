/* ============================================ */
/* ADIP RMX - PRODUCTS DATA */
/* ============================================ */

/* 
   CARA MENAMBAH/MENGUBAH PRODUK:
   
   1. UNTUK MENAMBAH FLM:
      - Copy salah satu objek di array flmProducts
      - Ubah nilai-nilainya sesuai produk baru
      - Pastikan id unik (tidak boleh sama dengan yang lain)
   
   2. UNTUK MENAMBAH SAMPLE PACK:
      - Copy salah satu objek di array samplePacks
      - Ubah nilai-nilainya sesuai sample pack baru
   
   3. UNTUK MENGUBAH HARGA:
      - Cari produk yang ingin diubah
      - Ubah nilai "price" (dalam format angka, tanpa titik atau koma)
   
   4. UNTUK MENGUBAH GAMBAR:
      - Taruh gambar di folder images/
      - Ubah nilai "image" sesuai nama file
   
   5. UNTUK MENGUBAH AUDIO PREVIEW:
      - Taruh file audio di folder assets/audio/
      - Ubah nilai "audio" sesuai nama file
*/

// ============================================
// FLM PRODUCTS - 25 Products
// ============================================
const flmProducts = [
    {
        id: 'flm-001',
        name: 'FLM Rully Fvnky',
        genre: 'POP',
        price: 89000,
        bpm: 127,
        image: 'images/flm/flm-001.jpg',
        audio: 'assets/audio/flm-001.mp3',
        description: 'Style pop-funk dengan bass tight dan drum groove lengkap'
    },
    {
        id: 'flm-002',
        name: 'FLM Maman Fvndy',
        genre: 'TRAP',
        price: 98000,
        bpm: 89,
        image: 'images/flm/flm-002.jpg',
        audio: 'assets/audio/flm-002.mp3',
        description: 'Hard trap dengan 808 yang powerful dan hi-hat kompleks'
    },
    {
        id: 'flm-003',
        name: 'FLM Kondang',
        genre: 'DANGDUT',
        price: 84500,
        bpm: 156,
        image: 'images/flm/flm-003.jpg',
        audio: 'assets/audio/flm-003.mp3',
        description: 'Dangdut modern dengan kendang digital dan melody khas'
    },
    {
        id: 'flm-004',
        name: 'FLM Hipdut Lamunan',
        genre: 'HIPDUT',
        price: 112000,
        bpm: 67,
        image: 'images/flm/flm-004.jpg',
        audio: 'assets/audio/flm-004.mp3',
        description: 'Fusion hip-hop dan dangdut dengan vibe unik'
    },
    {
        id: 'flm-005',
        name: 'FLM Style Candu',
        genre: 'SLOW BASS',
        price: 82000,
        bpm: 203,
        image: 'images/flm/flm-005.jpg',
        audio: 'assets/audio/flm-005.mp3',
        description: 'Slow bass dengan groove yang candu dan bass menggelagar'
    },
    {
        id: 'flm-006',
        name: 'FLM Happy Team Ori',
        genre: 'HAPPY',
        price: 75000,
        bpm: 145,
        image: 'images/flm/flm-006.jpg',
        audio: 'assets/audio/flm-006.mp3',
        description: 'Beat ceria untuk konten happy dan komedi'
    },
    {
        id: 'flm-007',
        name: 'FLM Tante Culik V2',
        genre: 'VIRAL',
        price: 60000,
        bpm: 140,
        image: 'images/flm/flm-007.jpg',
        audio: 'assets/audio/flm-007.mp3',
        description: 'Beat viral dengan sample yang lagi trending'
    },
    {
        id: 'flm-008',
        name: 'FLM Lambada',
        genre: 'LATIN',
        price: 92000,
        bpm: 118,
        image: 'images/flm/flm-008.jpg',
        audio: 'assets/audio/flm-008.mp3',
        description: 'Latin groove dengan percussion khas Amerika Selatan'
    },
    {
        id: 'flm-009',
        name: 'FLM Angga Fvnky',
        genre: 'FUNK',
        price: 83000,
        bpm: 110,
        image: 'images/flm/flm-009.jpg',
        audio: 'assets/audio/flm-009.mp3',
        description: 'Funky bassline dengan brass section yang groovy'
    },
    {
        id: 'flm-010',
        name: 'FLM Enaff V1',
        genre: 'PHONK',
        price: 95500,
        bpm: 140,
        image: 'images/flm/flm-010.jpg',
        audio: 'assets/audio/flm-010.mp3',
        description: 'Phonk dengan sample vintage dan cowbell ikonik'
    },
    {
        id: 'flm-011',
        name: 'FLM Drill Mode',
        genre: 'DRILL',
        price: 105000,
        bpm: 140,
        image: 'images/flm/flm-011.jpg',
        audio: 'assets/audio/flm-011.mp3',
        description: 'UK Drill dengan sliding 808 dan dark melody'
    },
    {
        id: 'flm-012',
        name: 'FLM Reggae Vibes',
        genre: 'REGGAE',
        price: 78000,
        bpm: 85,
        image: 'images/flm/flm-012.jpg',
        audio: 'assets/audio/flm-012.mp3',
        description: 'Reggae chill dengan guitar skank dan organ'
    },
    {
        id: 'flm-013',
        name: 'FLM EDM Drop',
        genre: 'EDM',
        price: 115000,
        bpm: 128,
        image: 'images/flm/flm-013.jpg',
        audio: 'assets/audio/flm-013.mp3',
        description: 'EDM festival dengan big room drop dan synth leads'
    },
    {
        id: 'flm-014',
        name: 'FLM RnB Soul',
        genre: 'R&B',
        price: 88000,
        bpm: 95,
        image: 'images/flm/flm-014.jpg',
        audio: 'assets/audio/flm-014.mp3',
        description: 'Smooth R&B dengan chord progressions yang rich'
    },
    {
        id: 'flm-015',
        name: 'FLM Rock Anthem',
        genre: 'ROCK',
        price: 95000,
        bpm: 135,
        image: 'images/flm/flm-015.jpg',
        audio: 'assets/audio/flm-015.mp3',
        description: 'Rock modern dengan distorted guitar dan powerful drums'
    },
    {
        id: 'flm-016',
        name: 'FLM Jazz Lounge',
        genre: 'JAZZ',
        price: 85000,
        bpm: 90,
        image: 'images/flm/flm-016.jpg',
        audio: 'assets/audio/flm-016.mp3',
        description: 'Jazz lo-fi dengan piano chords dan double bass'
    },
    {
        id: 'flm-017',
        name: 'FLM Afrobeat',
        genre: 'AFRO',
        price: 99000,
        bpm: 110,
        image: 'images/flm/flm-017.jpg',
        audio: 'assets/audio/flm-017.mp3',
        description: 'Afrobeat dengan percussion Afrika dan groove infectious'
    },
    {
        id: 'flm-018',
        name: 'FLM House Groove',
        genre: 'HOUSE',
        price: 92000,
        bpm: 124,
        image: 'images/flm/flm-018.jpg',
        audio: 'assets/audio/flm-018.mp3',
        description: 'Deep house dengan bassline groovy dan piano stabs'
    },
    {
        id: 'flm-019',
        name: 'FLM Techno Dark',
        genre: 'TECHNO',
        price: 108000,
        bpm: 130,
        image: 'images/flm/flm-019.jpg',
        audio: 'assets/audio/flm-019.mp3',
        description: 'Dark techno dengan industrial sounds dan driving kick'
    },
    {
        id: 'flm-020',
        name: 'FLM Acoustic',
        genre: 'ACOUSTIC',
        price: 72000,
        bpm: 100,
        image: 'images/flm/flm-020.jpg',
        audio: 'assets/audio/flm-020.mp3',
        description: 'Acoustic pop dengan guitar dan light percussion'
    },
    {
        id: 'flm-021',
        name: 'FLM Orchestral',
        genre: 'CINEMATIC',
        price: 125000,
        bpm: 80,
        image: 'images/flm/flm-021.jpg',
        audio: 'assets/audio/flm-021.mp3',
        description: 'Orchestral arrangement dengan strings dan brass'
    },
    {
        id: 'flm-022',
        name: 'FLM Moombahton',
        genre: 'MOOMBAH',
        price: 94000,
        bpm: 110,
        image: 'images/flm/flm-022.jpg',
        audio: 'assets/audio/flm-022.mp3',
        description: 'Moombahton dengan dembow rhythm dan synth leads'
    },
    {
        id: 'flm-023',
        name: 'FLM Future Bass',
        genre: 'FUTURE',
        price: 110000,
        bpm: 150,
        image: 'images/flm/flm-023.jpg',
        audio: 'assets/audio/flm-023.mp3',
        description: 'Future bass dengan supersaw chords dan vocal chops'
    },
    {
        id: 'flm-024',
        name: 'FLM Trap Soul',
        genre: 'TRAPSOUL',
        price: 102000,
        bpm: 140,
        image: 'images/flm/flm-024.jpg',
        audio: 'assets/audio/flm-024.mp3',
        description: 'Trap soul dengan 808 dan melody yang emotional'
    },
    {
        id: 'flm-025',
        name: 'FLM Disco Fever',
        genre: 'DISCO',
        price: 87000,
        bpm: 120,
        image: 'images/flm/flm-025.jpg',
        audio: 'assets/audio/flm-025.mp3',
        description: 'Nu-disco dengan funky bass dan string sections'
    }
];

// ============================================
// SAMPLE PACKS - 50+ Packs
// ============================================
const samplePacks = [
    {
        id: 'sample-001',
        name: 'Trap Drums Vol.1',
        category: 'DRUMS',
        price: 45000,
        image: 'images/samples/sample-001.jpg',
        audio: 'assets/audio/sample-001.mp3',
        description: '50+ trap drum loops dan one-shots'
    },
    {
        id: 'sample-002',
        name: 'Lo-Fi Textures',
        category: 'LO-FI',
        price: 35000,
        image: 'images/samples/sample-002.jpg',
        audio: 'assets/audio/sample-002.mp3',
        description: 'Atmospheric textures untuk lo-fi beats'
    },
    {
        id: 'sample-003',
        name: 'Bass House Loops',
        category: 'BASS',
        price: 55000,
        image: 'images/samples/sample-003.jpg',
        audio: 'assets/audio/sample-003.mp3',
        description: 'Bassline loops untuk house music'
    },
    {
        id: 'sample-004',
        name: 'Vocal Chops Kit',
        category: 'VOCAL',
        price: 40000,
        image: 'images/samples/sample-004.jpg',
        audio: 'assets/audio/sample-004.mp3',
        description: '100+ vocal chops siap pakai'
    },
    {
        id: 'sample-005',
        name: 'Retro Synths',
        category: 'SYNTH',
        price: 50000,
        image: 'images/samples/sample-005.jpg',
        audio: 'assets/audio/sample-005.mp3',
        description: 'Synth presets ala 80s dan 90s'
    },
    {
        id: 'sample-006',
        name: 'Cinematic FX',
        category: 'FX',
        price: 38000,
        image: 'images/samples/sample-006.jpg',
        audio: 'assets/audio/sample-006.mp3',
        description: 'Sound effects untuk scoring'
    },
    {
        id: 'sample-007',
        name: '808 Collection',
        category: '808',
        price: 42000,
        image: 'images/samples/sample-007.jpg',
        audio: 'assets/audio/sample-007.mp3',
        description: '30+ 808 samples dengan berbagai karakter'
    },
    {
        id: 'sample-008',
        name: 'Hi-Hat Patterns',
        category: 'HI-HAT',
        price: 28000,
        image: 'images/samples/sample-008.jpg',
        audio: 'assets/audio/sample-008.mp3',
        description: 'Rolled hi-hats dan patterns'
    },
    {
        id: 'sample-009',
        name: 'Melody Loops Pack',
        category: 'MELODY',
        price: 48000,
        image: 'images/samples/sample-009.jpg',
        audio: 'assets/audio/sample-009.mp3',
        description: 'Melody loops dengan MIDI included'
    },
    {
        id: 'sample-010',
        name: 'Percussion Essentials',
        category: 'PERCUSSION',
        price: 32000,
        image: 'images/samples/sample-010.jpg',
        audio: 'assets/audio/sample-010.mp3',
        description: 'Ethnic dan latin percussion'
    },
    {
        id: 'sample-011',
        name: 'Ambient Pads',
        category: 'PADS',
        price: 36000,
        image: 'images/samples/sample-011.jpg',
        audio: 'assets/audio/sample-011.mp3',
        description: 'Atmospheric pads untuk backing'
    },
    {
        id: 'sample-012',
        name: 'Brass & Horns',
        category: 'BRASS',
        price: 44000,
        image: 'images/samples/sample-012.jpg',
        audio: 'assets/audio/sample-012.mp3',
        description: 'Brass section samples'
    },
    {
        id: 'sample-013',
        name: 'Guitar Loops',
        category: 'GUITAR',
        price: 39000,
        image: 'images/samples/sample-013.jpg',
        audio: 'assets/audio/sample-013.mp3',
        description: 'Acoustic dan electric guitar loops'
    },
    {
        id: 'sample-014',
        name: 'Piano Chords',
        category: 'PIANO',
        price: 35000,
        image: 'images/samples/sample-014.jpg',
        audio: 'assets/audio/sample-014.mp3',
        description: 'Chord progressions dengan piano'
    },
    {
        id: 'sample-015',
        name: 'String Ensemble',
        category: 'STRINGS',
        price: 47000,
        image: 'images/samples/sample-015.jpg',
        audio: 'assets/audio/sample-015.mp3',
        description: 'Orchestral string samples'
    },
    {
        id: 'sample-016',
        name: 'Drum Fills',
        category: 'DRUMS',
        price: 30000,
        image: 'images/samples/sample-016.jpg',
        audio: 'assets/audio/sample-016.mp3',
        description: 'Drum fills untuk transisi'
    },
    {
        id: 'sample-017',
        name: 'Sub Bass',
        category: 'BASS',
        price: 33000,
        image: 'images/samples/sample-017.jpg',
        audio: 'assets/audio/sample-017.mp3',
        description: 'Sub bass one-shots dan loops'
    },
    {
        id: 'sample-018',
        name: 'Snare Collection',
        category: 'DRUMS',
        price: 29000,
        image: 'images/samples/sample-018.jpg',
        audio: 'assets/audio/sample-018.mp3',
        description: '40+ snare samples berbagai gaya'
    },
    {
        id: 'sample-019',
        name: 'Kick Drums',
        category: 'DRUMS',
        price: 31000,
        image: 'images/samples/sample-019.jpg',
        audio: 'assets/audio/sample-019.mp3',
        description: 'Kick drums untuk berbagai genre'
    },
    {
        id: 'sample-020',
        name: 'Cymbals & Crashes',
        category: 'DRUMS',
        price: 27000,
        image: 'images/samples/sample-020.jpg',
        audio: 'assets/audio/sample-020.mp3',
        description: 'Cymbals, crashes, dan rides'
    },
    {
        id: 'sample-021',
        name: 'Toms Pack',
        category: 'DRUMS',
        price: 26000,
        image: 'images/samples/sample-021.jpg',
        audio: 'assets/audio/sample-021.mp3',
        description: 'Tom fills dan one-shots'
    },
    {
        id: 'sample-022',
        name: 'Claps & Snaps',
        category: 'PERCUSSION',
        price: 24000,
        image: 'images/samples/sample-022.jpg',
        audio: 'assets/audio/sample-022.mp3',
        description: 'Claps, snaps, dan body percussion'
    },
    {
        id: 'sample-023',
        name: 'Shakers & Tambourines',
        category: 'PERCUSSION',
        price: 23000,
        image: 'images/samples/sample-023.jpg',
        audio: 'assets/audio/sample-023.mp3',
        description: 'Shakers dan tambourine loops'
    },
    {
        id: 'sample-024',
        name: 'Bongos & Congas',
        category: 'PERCUSSION',
        price: 34000,
        image: 'images/samples/sample-024.jpg',
        audio: 'assets/audio/sample-024.mp3',
        description: 'Latin percussion essentials'
    },
    {
        id: 'sample-025',
        name: 'Sound FX Pack',
        category: 'FX',
        price: 37000,
        image: 'images/samples/sample-025.jpg',
        audio: 'assets/audio/sample-025.mp3',
        description: 'Risers, sweeps, dan impacts'
    },
    {
        id: 'sample-026',
        name: 'Vocal Adlibs',
        category: 'VOCAL',
        price: 41000,
        image: 'images/samples/sample-026.jpg',
        audio: 'assets/audio/sample-026.mp3',
        description: 'Vocal adlibs dan shouts'
    },
    {
        id: 'sample-027',
        name: 'Arpeggios',
        category: 'SYNTH',
        price: 43000,
        image: 'images/samples/sample-027.jpg',
        audio: 'assets/audio/sample-027.mp3',
        description: 'Synth arpeggio patterns'
    },
    {
        id: 'sample-028',
        name: 'Bells & Plucks',
        category: 'SYNTH',
        price: 38000,
        image: 'images/samples/sample-028.jpg',
        audio: 'assets/audio/sample-028.mp3',
        description: 'Bell dan pluck sounds'
    },
    {
        id: 'sample-029',
        name: 'Leads Collection',
        category: 'SYNTH',
        price: 46000,
        image: 'images/samples/sample-029.jpg',
        audio: 'assets/audio/sample-029.mp3',
        description: 'Synth leads untuk melody'
    },
    {
        id: 'sample-030',
        name: 'Bass Guitar',
        category: 'BASS',
        price: 40000,
        image: 'images/samples/sample-030.jpg',
        audio: 'assets/audio/sample-030.mp3',
        description: 'Bass guitar loops dan one-shots'
    },
    {
        id: 'sample-031',
        name: 'Dubstep Growls',
        category: 'BASS',
        price: 52000,
        image: 'images/samples/sample-031.jpg',
        audio: 'assets/audio/sample-031.mp3',
        description: 'Aggressive bass growls'
    },
    {
        id: 'sample-032',
        name: 'Reese Bass',
        category: 'BASS',
        price: 45000,
        image: 'images/samples/sample-032.jpg',
        audio: 'assets/audio/sample-032.mp3',
        description: 'Classic reese bass sounds'
    },
    {
        id: 'sample-033',
        name: 'Chiptune Sounds',
        category: 'SYNTH',
        price: 33000,
        image: 'images/samples/sample-033.jpg',
        audio: 'assets/audio/sample-033.mp3',
        description: '8-bit dan 16-bit sounds'
    },
    {
        id: 'sample-034',
        name: 'Nature Sounds',
        category: 'AMBIENT',
        price: 29000,
        image: 'images/samples/sample-034.jpg',
        audio: 'assets/audio/sample-034.mp3',
        description: 'Field recordings alam'
    },
    {
        id: 'sample-035',
        name: 'City Ambience',
        category: 'AMBIENT',
        price: 28000,
        image: 'images/samples/sample-035.jpg',
        audio: 'assets/audio/sample-035.mp3',
        description: 'Urban ambience dan soundscapes'
    },
    {
        id: 'sample-036',
        name: 'Horror FX',
        category: 'FX',
        price: 42000,
        image: 'images/samples/sample-036.jpg',
        audio: 'assets/audio/sample-036.mp3',
        description: 'Scary sounds untuk horror'
    },
    {
        id: 'sample-037',
        name: 'Sci-Fi Sounds',
        category: 'FX',
        price: 44000,
        image: 'images/samples/sample-037.jpg',
        audio: 'assets/audio/sample-037.mp3',
        description: 'Futuristic sci-fi effects'
    },
    {
        id: 'sample-038',
        name: 'Comedy FX',
        category: 'FX',
        price: 25000,
        image: 'images/samples/sample-038.jpg',
        audio: 'assets/audio/sample-038.mp3',
        description: 'Funny sounds untuk komedi'
    },
    {
        id: 'sample-039',
        name: 'Transitions',
        category: 'FX',
        price: 36000,
        image: 'images/samples/sample-039.jpg',
        audio: 'assets/audio/sample-039.mp3',
        description: 'Transition effects pack'
    },
    {
        id: 'sample-040',
        name: 'Drum Rolls',
        category: 'DRUMS',
        price: 32000,
        image: 'images/samples/sample-040.jpg',
        audio: 'assets/audio/sample-040.mp3',
        description: 'Drum rolls untuk build-up'
    },
    {
        id: 'sample-041',
        name: 'Tonal Kick',
        category: 'DRUMS',
        price: 30000,
        image: 'images/samples/sample-041.jpg',
        audio: 'assets/audio/sample-041.mp3',
        description: 'Kicks dengan pitch yang jelas'
    },
    {
        id: 'sample-042',
        name: 'Layered Snares',
        category: 'DRUMS',
        price: 35000,
        image: 'images/samples/sample-042.jpg',
        audio: 'assets/audio/sample-042.mp3',
        description: 'Thick layered snare sounds'
    },
    {
        id: 'sample-043',
        name: 'Open Hats',
        category: 'DRUMS',
        price: 22000,
        image: 'images/samples/sample-043.jpg',
        audio: 'assets/audio/sample-043.mp3',
        description: 'Open hi-hat samples'
    },
    {
        id: 'sample-044',
        name: 'Closed Hats',
        category: 'DRUMS',
        price: 22000,
        image: 'images/samples/sample-044.jpg',
        audio: 'assets/audio/sample-044.mp3',
        description: 'Closed hi-hat samples'
    },
    {
        id: 'sample-045',
        name: 'Percussion Loops',
        category: 'PERCUSSION',
        price: 38000,
        image: 'images/samples/sample-045.jpg',
        audio: 'assets/audio/sample-045.mp3',
        description: 'Ready-to-use percussion loops'
    },
    {
        id: 'sample-046',
        name: 'Tribal Drums',
        category: 'PERCUSSION',
        price: 41000,
        image: 'images/samples/sample-046.jpg',
        audio: 'assets/audio/sample-046.mp3',
        description: 'Tribal dan ethnic drums'
    },
    {
        id: 'sample-047',
        name: 'Vocal FX',
        category: 'VOCAL',
        price: 34000,
        image: 'images/samples/sample-047.jpg',
        audio: 'assets/audio/sample-047.mp3',
        description: 'Vocal effects dan processing'
    },
    {
        id: 'sample-048',
        name: 'Choir Samples',
        category: 'VOCAL',
        price: 48000,
        image: 'images/samples/sample-048.jpg',
        audio: 'assets/audio/sample-048.mp3',
        description: 'Choir dan vocal ensemble'
    },
    {
        id: 'sample-049',
        name: 'Whispers',
        category: 'VOCAL',
        price: 26000,
        image: 'images/samples/sample-049.jpg',
        audio: 'assets/audio/sample-049.mp3',
        description: 'Whispered vocal samples'
    },
    {
        id: 'sample-050',
        name: 'Shouts & Screams',
        category: 'VOCAL',
        price: 31000,
        image: 'images/samples/sample-050.jpg',
        audio: 'assets/audio/sample-050.mp3',
        description: 'Energetic vocal shouts'
    },
    {
        id: 'sample-051',
        name: 'Ethnic Vocals',
        category: 'VOCAL',
        price: 45000,
        image: 'images/samples/sample-051.jpg',
        audio: 'assets/audio/sample-051.mp3',
        description: 'World music vocal samples'
    },
    {
        id: 'sample-052',
        name: 'Mallets',
        category: 'PERCUSSION',
        price: 37000,
        image: 'images/samples/sample-052.jpg',
        audio: 'assets/audio/sample-052.mp3',
        description: 'Marimba, xylophone, dan mallets'
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format harga ke format Rupiah
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Get genre badge class
function getGenreBadgeClass(genre) {
    const genreMap = {
        'POP': 'genre-pop',
        'TRAP': 'genre-trap',
        'DANGDUT': 'genre-dangdut',
        'HIPDUT': 'genre-dangdut',
        'SLOW BASS': 'genre-slow',
        'HAPPY': 'genre-happy',
        'VIRAL': 'genre-viral',
        'LATIN': 'genre-latin',
        'FUNK': 'genre-funk',
        'PHONK': 'genre-phonk',
        'DRILL': 'genre-trap',
        'REGGAE': 'genre-latin',
        'EDM': 'genre-pop',
        'R&B': 'genre-funk',
        'ROCK': 'genre-viral',
        'JAZZ': 'genre-lofi',
        'AFRO': 'genre-latin',
        'HOUSE': 'genre-pop',
        'TECHNO': 'genre-trap',
        'ACOUSTIC': 'genre-happy',
        'CINEMATIC': 'genre-slow',
        'MOOMBAH': 'genre-latin',
        'FUTURE': 'genre-pop',
        'TRAPSOUL': 'genre-trap',
        'DISCO': 'genre-funk'
    };
    return genreMap[genre] || 'genre-pop';
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { flmProducts, samplePacks, formatPrice, getGenreBadgeClass };
}
