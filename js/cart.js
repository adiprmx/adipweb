/* ============================================ */
/* ADIP RMX - CART SYSTEM */
/* ============================================ */

/* 
   CARA KERJA CART SYSTEM:
   
   1. User klik "Beli" atau "Add to Cart" -> produk masuk ke cart
   2. Cart disimpan di localStorage (browser user)
   3. User bisa lihat cart dengan klik icon keranjang
   4. Klik "Checkout via WhatsApp" -> redirect ke WA dengan pesan otomatis
   
   UNTUK MENGUBAH NOMOR WHATSAPP:
   - Cari variable WHATSAPP_NUMBER di bawah
   - Ganti dengan nomor Anda (format: 628xxxxxxxxxx)
   
   UNTUK MENGUBAH PESAN WHATSAPP:
   - Cari function generateWhatsAppMessage()
   - Edit template pesannya
*/

// ============================================
// CONFIGURATION
// ============================================
const WHATSAPP_NUMBER = '6285893523975'; // Nomor WhatsApp ADIP RMX

// ============================================
// CART STATE
// ============================================
let cart = [];

// ============================================
// INITIALIZE CART
// ============================================
function initCart() {
    // Load cart dari localStorage
    const savedCart = localStorage.getItem('adipRmxCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// ============================================
// ADD TO CART
// ============================================
function addToCart(product) {
    // Cek apakah produk sudah ada di cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // Jika sudah ada, tambahkan quantity
        existingItem.quantity += 1;
    } else {
        // Jika belum ada, tambahkan ke cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            type: product.type || 'FLM',
            image: product.image,
            quantity: 1
        });
    }
    
    // Simpan ke localStorage
    saveCart();
    
    // Update UI
    updateCartUI();
    
    // Tampilkan notifikasi
    showToast(`${product.name} ditambahkan ke keranjang`);
    
    // Buka cart sidebar
    openCart();
}

// ============================================
// REMOVE FROM CART
// ============================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Produk dihapus dari keranjang');
}

// ============================================
// UPDATE QUANTITY
// ============================================
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// ============================================
// SAVE CART TO LOCALSTORAGE
// ============================================
function saveCart() {
    localStorage.setItem('adipRmxCart', JSON.stringify(cart));
}

// ============================================
// CLEAR CART
// ============================================
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// ============================================
// GET TOTAL PRICE
// ============================================
function getTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ============================================
// GET TOTAL ITEMS
// ============================================
function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// ============================================
// UPDATE CART UI
// ============================================
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count badge
    const totalItems = getTotalItems();
    if (cartCount) {
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }
    
    // Update cart items list
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="text-center text-text-gray py-12">
                    <i class="fas fa-shopping-cart text-4xl mb-4 opacity-30"></i>
                    <p>Keranjang masih kosong</p>
                    <p class="text-sm mt-2">Tambahkan produk untuk memulai</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item flex gap-4 p-4 bg-background rounded-xl mb-3">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-xs text-text-gray mb-1">${item.type}</div>
                                <div class="font-semibold text-sm">${item.name}</div>
                                <div class="text-sm font-medium mt-1">${formatPrice(item.price)}</div>
                            </div>
                            <button onclick="removeFromCart('${item.id}')" class="text-text-gray hover:text-red-500 transition-colors">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="flex items-center gap-3 mt-3">
                            <button onclick="updateQuantity('${item.id}', -1)" class="w-7 h-7 bg-white border border-border-gray rounded-lg flex items-center justify-center hover:border-black transition-colors">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="text-sm font-medium w-6 text-center">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)" class="w-7 h-7 bg-white border border-border-gray rounded-lg flex items-center justify-center hover:border-black transition-colors">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Update total price
    if (cartTotal) {
        cartTotal.textContent = formatPrice(getTotalPrice());
    }
}

// ============================================
// OPEN/CLOSE CART SIDEBAR
// ============================================
function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar) {
        cartSidebar.classList.add('open');
    }
    if (cartOverlay) {
        cartOverlay.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
    if (cartOverlay) {
        cartOverlay.classList.add('hidden');
    }
    document.body.style.overflow = '';
}

// ============================================
// GENERATE WHATSAPP MESSAGE
// ============================================
function generateWhatsAppMessage() {
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
    
    let message = `*ORDER ADIP RMX SHOP*\n`;
    message += `===================\n\n`;
    message += `*Tanggal:* ${dateStr}\n`;
    message += `*Jam:* ${timeStr}\n\n`;
    message += `*DAFTAR PESANAN:*\n`;
    message += `-------------------\n`;
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.name}*\n`;
        message += `   Tipe: ${item.type}\n`;
        message += `   Harga: ${formatPrice(item.price)}\n`;
        message += `   Jumlah: ${item.quantity}\n`;
        message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n-------------------\n`;
    message += `*TOTAL:* ${formatPrice(getTotalPrice())}\n\n`;
    message += `===================\n\n`;
    message += `Saya sudah transfer ke rekening yang tersedia. Berikut bukti transfernya.`;
    
    return encodeURIComponent(message);
}

// ============================================
// CHECKOUT TO WHATSAPP
// ============================================
function checkoutToWhatsApp() {
    if (cart.length === 0) {
        showToast('Keranjang masih kosong!');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Buka WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart setelah checkout
    // Uncomment baris di bawah jika ingin cart kosong setelah checkout
    // clearCart();
}

// ============================================
// SHOW TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart
    initCart();
    
    // Cart button click
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    // Close cart button
    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }
    
    // Cart overlay click
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutToWhatsApp);
    }
    
    // Add to cart buttons (delegation)
    document.addEventListener('click', function(e) {
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const product = {
                id: addToCartBtn.dataset.product,
                name: addToCartBtn.dataset.product,
                price: parseInt(addToCartBtn.dataset.price),
                type: addToCartBtn.dataset.type,
                image: 'images/product-placeholder.jpg' // Default image
            };
            
            // Cari gambar produk dari parent element
            const card = addToCartBtn.closest('.product-card, .sample-card, .bg-white');
            if (card) {
                const img = card.querySelector('img');
                if (img) {
                    product.image = img.src;
                    product.name = addToCartBtn.dataset.product; // Use data-product as name
                }
            }
            
            addToCart(product);
        }
    });
});

// Close cart on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCart();
        closeLightbox();
    }
});
