// Mobile Navbar toggling
const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close = document.querySelector('#close');

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close && nav) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Single Product Image Gallery slider (fallback interactive fallback for static items)
const mainImg = document.querySelector('#mainImg');
const smallimg = document.querySelectorAll('.small-img');
if (mainImg && smallimg.length > 0) {
    smallimg.forEach((img) => {
        if (img) {
            img.onclick = () => {
                mainImg.src = img.src;
            };
        }
    });
}

// <------------------- Products Database ------------------->
const products = {
    "f1": {
        name: "Men's Cartoon Astronaut T-Shirt",
        brand: "Adidas",
        price: 3499,
        category: "Men",
        colors: ["White", "Navy Blue", "Black", "Grey"],
        images: ["img/products/f1.jpg", "img/products/f2.jpg", "img/products/f3.jpg", "img/products/f4.jpg"],
        description: "Bring fun and comfort to your everyday style with this Adidas Men’s Cartoon Astronaut T-Shirt. Designed with a trendy astronaut graphic print, this t-shirt adds a modern and playful vibe to your casual wardrobe. Made from soft and breathable premium fabric, it ensures all-day comfort with a stylish regular fit."
    },
    "f2": {
        name: "Men's Vintage Floral Casual Shirt",
        brand: "H&M",
        price: 1899,
        category: "Men",
        colors: ["Floral Blue", "Floral Red", "Sage Green"],
        images: ["img/products/f2.jpg", "img/products/f1.jpg", "img/products/f3.jpg", "img/products/f4.jpg"],
        description: "Embrace the summer vibes with this H&M Men’s Vintage Floral Casual Shirt. Featuring a beautiful and delicate floral print, this lightweight shirt is perfect for beach vacations, casual garden parties, or weekend brunches. Tailored in a relaxed fit from premium cotton blend fabric."
    },
    "f3": {
        name: "Men's Midnight Floral Printed Shirt",
        brand: "Wrogn",
        price: 2799,
        category: "Men",
        colors: ["Navy Blue", "Charcoal Black"],
        images: ["img/products/f3.jpg", "img/products/f1.jpg", "img/products/f2.jpg", "img/products/f4.jpg"],
        description: "Stand out in style with this Wrogn Men’s Midnight Floral Printed Shirt. Featuring a bold and unique floral pattern on a dark background, this shirt offers a modern twist on a classic print. Crafted from high-quality viscose fabric for a premium sheen and smooth drape."
    },
    "f4": {
        name: "Men's Dual Tone Linen Shirt",
        brand: "US Polo Assn.",
        price: 2299,
        category: "Men",
        colors: ["Light Pink", "Soft Blue", "Mint Green"],
        images: ["img/products/f4.jpg", "img/products/f1.jpg", "img/products/f2.jpg", "img/products/f3.jpg"],
        description: "Stay cool and comfortable with this US Polo Assn. Men’s Dual Tone Linen Shirt. Made from a premium linen-cotton blend, it offers exceptional breathability and a lightweight feel. The subtle dual-tone weave gives it a unique texture, suitable for both semi-formal and casual styling."
    },
    "f5": {
        name: "Women's Tropical Leaf Summer Shirt",
        brand: "Zara",
        price: 2499,
        category: "Women",
        colors: ["Forest Green", "Amber Orange", "White"],
        images: ["img/products/f5.jpg", "img/products/f6.jpg", "img/products/f7.jpg", "img/products/f8.jpg"],
        description: "Add a vibrant touch to your summer collection with this Zara Women’s Tropical Leaf Summer Shirt. Boasting a striking tropical print, this shirt is designed in an oversized silhouette for ultimate casual chic. Styled with a classic collar and full button placket, crafted in breathable cotton."
    },
    "f6": {
        name: "Women's Cherry Blossom White Shirt",
        brand: "Levi's",
        price: 2799,
        category: "Women",
        colors: ["Pink Tint", "Pure White"],
        images: ["img/products/f6.jpg", "img/products/f5.jpg", "img/products/f7.jpg", "img/products/f8.jpg"],
        description: "A beautiful, feminine upgrade to a wardrobe staple, this Levi’s Women’s Cherry Blossom White Shirt features a delicate cherry blossom embroidery on the chest. Tailored in a classic regular fit from pre-washed premium cotton for an exceptionally soft hand-feel."
    },
    "f7": {
        name: "Women's Relaxed Linen Trousers",
        brand: "Peter England",
        price: 1999,
        category: "Women",
        colors: ["Beige", "Olive Green", "Charcoal Black"],
        images: ["img/products/f7.jpg", "img/products/f5.jpg", "img/products/f6.jpg", "img/products/f8.jpg"],
        description: "Effortlessly elegant and comfortable, these Peter England Women’s Relaxed Linen Trousers are a warm-weather must-have. Designed with a wide-leg cut and an elasticated waistband with drawback tie, they pair beautifully with shirts, tees, or cropped tops."
    },
    "f8": {
        name: "Women's Abstract Lavender V-Neck Top",
        brand: "Zara",
        price: 1699,
        category: "Women",
        colors: ["Lavender", "Blossom Pink"],
        images: ["img/products/f8.jpg", "img/products/f5.jpg", "img/products/f6.jpg", "img/products/f7.jpg"],
        description: "Refresh your smart-casual looks with this Zara Women’s Abstract Lavender V-Neck Top. Featuring a gorgeous abstract print, this top has a flattering V-neckline and gathered details on the shoulders for added charm. Made from a fluid polyester fabric that drapes beautifully."
    },
    "n1": {
        name: "Men's Sky Blue Oxford Casual Shirt",
        brand: "Adidas",
        price: 1999,
        category: "Men",
        colors: ["Sky Blue", "Classic White"],
        images: ["img/products/n1.jpg", "img/products/n2.jpg", "img/products/n3.jpg", "img/products/n4.jpg"],
        description: "A timeless wardrobe essential, this Adidas Men's Sky Blue Oxford Casual Shirt is crafted from robust cotton oxford weave. It features a button-down collar, chest pocket, and a clean, sharp look that easily transitions from smart office wear to relaxed weekend hangouts."
    },
    "n2": {
        name: "Men's Navy Check Slim Fit Shirt",
        brand: "H&M",
        price: 1899,
        category: "Men",
        colors: ["Navy Check", "Red Check"],
        images: ["img/products/n2.jpg", "img/products/n1.jpg", "img/products/n3.jpg", "img/products/n4.jpg"],
        description: "Look sharp with this H&M Men's Navy Check Slim Fit Shirt. Tailored in a modern, streamlined fit that flatters the physique, it features a bold check design. Made from structured cotton fabric, it pairs perfectly with chinos or denim."
    },
    "n3": {
        name: "Men's White Premium Formal Shirt",
        brand: "Wrogn",
        price: 2799,
        category: "Men",
        colors: ["Classic White", "Crisp Silver"],
        images: ["img/products/n3.jpg", "img/products/n1.jpg", "img/products/n2.jpg", "img/products/n4.jpg"],
        description: "Elevate your formal wardrobe with this Wrogn Men's White Premium Formal Shirt. Designed with a stiff collar and double cuffs, this shirt is made from ultra-premium long-staple cotton for a smooth, high-thread-count feel that resists wrinkles throughout the day."
    },
    "n4": {
        name: "Men's Beige Graphic Linen Half Shirt",
        brand: "US Polo Assn.",
        price: 2299,
        category: "Men",
        colors: ["Beige", "Sand Cream"],
        images: ["img/products/n4.jpg", "img/products/n1.jpg", "img/products/n2.jpg", "img/products/n3.jpg"],
        description: "Perfect for warm days, this US Polo Assn. Men's Beige Graphic Linen Half Shirt features a subtle graphic accent on premium linen fabric. Styled with short sleeves and a relaxed camp collar, it provides a breezy, comfortable fit."
    },
    "n5": {
        name: "Men's Light Blue Denim Casual Shirt",
        brand: "Zara",
        price: 2499,
        category: "Men",
        colors: ["Light Denim Blue", "Medium Denim Blue"],
        images: ["img/products/n5.jpg", "img/products/n6.jpg", "img/products/n7.jpg", "img/products/n8.jpg"],
        description: "Inject some rugged charm into your outfits with this Zara Men's Light Blue Denim Casual Shirt. Built from durable light-washed denim cotton, this shirt features double chest button pockets and classic western-style stitching."
    },
    "n6": {
        name: "Men's Grey Striped Cotton Shorts",
        brand: "Allen Solly",
        price: 2799,
        category: "Men",
        colors: ["Grey Stripes", "Navy Stripes"],
        images: ["img/products/n6.jpg", "img/products/n5.jpg", "img/products/n7.jpg", "img/products/n8.jpg"],
        description: "Stay active and relaxed with these Allen Solly Men's Grey Striped Cotton Shorts. Featuring a textured striped print on soft cotton knit, they come with side pockets and a comfy drawstring waist. Perfect for active weekends or lounging."
    },
    "n7": {
        name: "Men's Khaki Utility Overshirt",
        brand: "FabIndia",
        price: 1999,
        category: "Men",
        colors: ["Khaki", "Army Green"],
        images: ["img/products/n7.jpg", "img/products/n5.jpg", "img/products/n6.jpg", "img/products/n8.jpg"],
        description: "Transition between seasons easily with this FabIndia Men's Khaki Utility Overshirt. Tailored from heavy-duty textured cotton canvas, this overshirt features multi-pocket utility storage and works beautifully layered over a simple white tee."
    },
    "n8": {
        name: "Men's Charcoal Mandarin Collar Short Sleeve Shirt",
        brand: "Peter England",
        price: 1699,
        category: "Men",
        colors: ["Charcoal Grey", "Jet Black"],
        images: ["img/products/n8.jpg", "img/products/n5.jpg", "img/products/n6.jpg", "img/products/n7.jpg"],
        description: "Clean lines and a minimalist aesthetic define this Peter England Men's Charcoal Mandarin Collar Short Sleeve Shirt. Featuring a sleek band collar and breathable summer cotton blend, it delivers effortless modern styling."
    }
};

// <------------------- Storage & Cart Logic ------------------->
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cartyra_cart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cartyra_cart', JSON.stringify(cart));
    updateCartBadges();
}

function formatPrice(number) {
    return "₹" + number.toLocaleString('en-IN');
}

// Toast notification function
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconHtml = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'error') {
        iconHtml = '<i class="fa-solid fa-circle-xmark"></i>';
    } else if (type === 'info') {
        iconHtml = '<i class="fa-solid fa-circle-info"></i>';
    }
    
    toast.innerHTML = `
        ${iconHtml}
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    // Trigger reflow to animate
    toast.offsetHeight;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// Update badges in the navigation
function updateCartBadges() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    
    const badgeTargets = [
        document.querySelector('#lg-bag a'),
        document.querySelector('#mobile a[href="cart.html"]')
    ];
    
    badgeTargets.forEach(target => {
        if (!target) return;
        
        let badge = target.querySelector('.cart-badge');
        
        if (totalQty > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'cart-badge';
                target.appendChild(badge);
            }
            
            const prevCount = parseInt(badge.textContent) || 0;
            badge.textContent = totalQty;
            
            if (prevCount !== totalQty) {
                badge.classList.add('bump');
                setTimeout(() => badge.classList.remove('bump'), 200);
            }
        } else {
            if (badge) {
                badge.remove();
            }
        }
    });
}

// Add to Cart core helper (with size and color support)
function addToCart(newItem) {
    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.name === newItem.name && item.size === newItem.size && item.color === newItem.color);
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += newItem.qty;
    } else {
        cart.push(newItem);
    }
    
    saveCart(cart);
    showToast(`Added ${newItem.name} (Size: ${newItem.size}, Color: ${newItem.color}) to cart!`, 'success');
}

// Attach event listeners to homepage / shop page product cards
document.querySelectorAll('.pro').forEach(proCard => {
    // Add Click listener to card to view product details page
    proCard.addEventListener('click', (e) => {
        // If they click the cart button or anything inside the cart button, let the quick cart handler handle it
        if (e.target.closest('a') && e.target.closest('a').querySelector('.fa-cart-shopping')) {
            return;
        }
        
        const imgEl = proCard.querySelector('img');
        if (!imgEl) return;
        
        const imgPath = imgEl.getAttribute('src');
        const filename = imgPath.substring(imgPath.lastIndexOf('/') + 1, imgPath.lastIndexOf('.'));
        
        // Dynamic redirect to sproduct.html passing the exact product id
        window.location.href = `sproduct.html?id=${filename}`;
    });

    // Cart icon click handler (Quick add to cart)
    const cartBtn = proCard.querySelector('a');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevents navigating to details page
            
            const imgEl = proCard.querySelector('img');
            const img = imgEl ? imgEl.getAttribute('src') : '';
            const filename = img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'));
            
            const product = products[filename];
            
            let brand = 'Premium';
            let name = 'Product';
            let price = 0;
            let defaultColor = 'White';
            
            if (product) {
                brand = product.brand;
                name = product.name;
                price = product.price;
                defaultColor = product.colors[0] || 'White';
            } else {
                const brandEl = proCard.querySelector('.des span');
                brand = brandEl ? brandEl.textContent.trim() : 'Premium';
                
                const nameEl = proCard.querySelector('.des h5');
                name = nameEl ? nameEl.textContent.trim() : 'Product';
                
                const priceEl = proCard.querySelector('.des h4');
                const priceText = priceEl ? priceEl.textContent : '0';
                price = parseInt(priceText.replace(/[^\d]/g, '')) || 0;
            }
            
            addToCart({
                name: name,
                brand: brand,
                price: price,
                img: img,
                qty: 1,
                size: 'M',
                color: defaultColor
            });
        });
    }
});

// Single product details page initializer & "Add to Cart" trigger
const spDetails = document.querySelector('.single-pro-details');
if (spDetails) {
    // Dynamic page loading logic
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        const product = products[productId];
        
        // Update main and small gallery images
        const mainImgEl = document.getElementById('mainImg');
        if (mainImgEl) {
            mainImgEl.src = product.images[0];
        }
        
        const smallImgElements = document.querySelectorAll('.small-img');
        if (smallImgElements.length > 0) {
            smallImgElements.forEach((el, idx) => {
                if (product.images[idx]) {
                    el.src = product.images[idx];
                }
            });
        }
        
        // Category path: Home / Men or Home / Women
        const categoryEl = spDetails.querySelector('h6');
        if (categoryEl) {
            categoryEl.textContent = `Home / ${product.category}`;
        }
        
        // Title
        const titleEl = spDetails.querySelector('h4');
        if (titleEl) {
            titleEl.textContent = product.name;
        }
        
        // Price
        const priceEl = spDetails.querySelector('h2');
        if (priceEl) {
            priceEl.textContent = formatPrice(product.price);
        }
        
        // Populate color options
        const colorSelectEl = document.getElementById('colorSelect');
        if (colorSelectEl && product.colors) {
            colorSelectEl.innerHTML = '<option value="">Select Color</option>';
            product.colors.forEach(col => {
                const opt = document.createElement('option');
                opt.value = col;
                opt.textContent = col;
                colorSelectEl.appendChild(opt);
            });
        }
        
        // Description
        const descEl = spDetails.querySelector('span');
        if (descEl) {
            descEl.textContent = product.description;
        }
    } else {
        // Fallback for color selection if no query param is found (defaults to Men's Fashion Shirt options)
        const colorSelectEl = document.getElementById('colorSelect');
        if (colorSelectEl) {
            colorSelectEl.innerHTML = `
                <option value="">Select Color</option>
                <option value="White">White</option>
                <option value="Navy Blue">Navy Blue</option>
                <option value="Black">Black</option>
                <option value="Grey">Grey</option>
            `;
        }
    }

    // Add to Cart handler
    const addToCartBtn = spDetails.querySelector('button.normal');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const name = spDetails.querySelector('h4').textContent.trim();
            const priceText = spDetails.querySelector('h2').textContent;
            const price = parseInt(priceText.replace(/[^\d]/g, '')) || 0;
            
            const sizeSelect = spDetails.querySelector('#sizeSelect');
            const size = sizeSelect ? sizeSelect.value : 'M';
            
            const colorSelect = spDetails.querySelector('#colorSelect');
            const color = colorSelect ? colorSelect.value : '';
            
            const qtyInput = document.querySelector('#qty');
            const qty = qtyInput ? parseInt(qtyInput.value) : 1;
            
            const mainImgEl = document.getElementById('mainImg');
            let img = '';
            if (mainImgEl) {
                img = mainImgEl.getAttribute('src');
            }
            
            let brand = 'Cartyra';
            const categoryEl = spDetails.querySelector('h6');
            if (categoryEl) {
                const categoryText = categoryEl.textContent.split('/');
                if (categoryText.length > 1) {
                    brand = categoryText[1].trim();
                }
            }
            
            if (size === 'Select Size' || !size) {
                showToast('Please select a size!', 'error');
                return;
            }
            if (color === 'Select Color' || !color) {
                showToast('Please select a color!', 'error');
                return;
            }
            if (qty < 1) {
                showToast('Please enter a valid quantity!', 'error');
                return;
            }
            
            addToCart({
                name: name,
                brand: brand,
                price: price,
                img: img,
                qty: qty,
                size: size,
                color: color
            });
        });
    }
}

// <------------------- Cart Page Renderer ------------------->
function renderCart() {
    const cartBody = document.getElementById('cartBody');
    const cartTable = document.getElementById('cartTable');
    const cartBottom = document.getElementById('cartBottom');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartBody) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        if (cartTable) cartTable.style.display = 'none';
        if (cartBottom) cartBottom.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        return;
    }
    
    if (cartTable) cartTable.style.display = 'table';
    if (cartBottom) cartBottom.style.display = 'flex';
    if (emptyCart) emptyCart.style.display = 'none';
    
    cartBody.innerHTML = '';
    
    cart.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="cart-product-cell">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-product-info">
                        <span>${item.brand}</span>
                        <h5>${item.name} (Size: ${item.size}, Color: ${item.color})</h5>
                    </div>
                </div>
            </td>
            <td><span class="cart-price">${formatPrice(item.price)}</span></td>
            <td>
                <div class="qty-control">
                    <button class="qty-decrease" data-index="${index}">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-increase" data-index="${index}">+</button>
                </div>
            </td>
            <td><span class="cart-subtotal">${formatPrice(item.price * item.qty)}</span></td>
            <td><button class="cart-remove" data-index="${index}" title="Remove item"><i class="fa-solid fa-trash-can"></i></button></td>
        `;
        cartBody.appendChild(tr);
    });
    
    // Wire controls
    cartBody.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            updateItemQty(idx, -1);
        });
    });
    
    cartBody.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            updateItemQty(idx, 1);
        });
    });
    
    cartBody.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            removeItem(idx);
        });
    });
    
    updateTotals();
}

function updateItemQty(index, change) {
    let cart = getCart();
    if (cart[index]) {
        cart[index].qty += change;
        if (cart[index].qty < 1) {
            cart[index].qty = 1;
        }
        saveCart(cart);
        renderCart();
    }
}

function removeItem(index) {
    let cart = getCart();
    if (cart[index]) {
        const removedName = cart[index].name;
        cart.splice(index, 1);
        saveCart(cart);
        renderCart();
        showToast(`Removed "${removedName}" from cart.`, 'info');
    }
}

function updateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    const couponCode = localStorage.getItem('cartyra_coupon_code') || '';
    let discount = 0;
    
    if (couponCode === 'SAVE10') {
        discount = Math.round(subtotal * 0.1);
    } else if (couponCode === 'CARTYRA20') {
        discount = Math.round(subtotal * 0.2);
    }
    
    const total = subtotal - discount;
    
    const subtotalEl = document.getElementById('summarySubtotal');
    const discountEl = document.getElementById('summaryDiscount');
    const totalEl = document.getElementById('summaryTotal');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (discountEl) discountEl.textContent = discount > 0 ? `-${formatPrice(discount)}` : formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(total);
}

// Global coupon handlers
window.applyCoupon = function() {
    const couponInput = document.getElementById('couponInput');
    const couponMsg = document.getElementById('couponMsg');
    
    if (!couponInput) return;
    const code = couponInput.value.trim().toUpperCase();
    
    if (!code) {
        showToast('Please enter a coupon code.', 'error');
        return;
    }
    
    if (code === 'SAVE10' || code === 'CARTYRA20') {
        localStorage.setItem('cartyra_coupon_code', code);
        const percent = code === 'SAVE10' ? '10%' : '20%';
        if (couponMsg) {
            couponMsg.style.display = 'block';
            couponMsg.style.color = '#088178';
            couponMsg.textContent = `Coupon ${code} applied successfully! You got ${percent} off.`;
        }
        showToast(`Coupon ${code} applied!`, 'success');
        updateTotals();
    } else {
        localStorage.removeItem('cartyra_coupon_code');
        if (couponMsg) {
            couponMsg.style.display = 'block';
            couponMsg.style.color = '#e74c3c';
            couponMsg.textContent = 'Invalid coupon code. Try SAVE10 or CARTYRA20.';
        }
        showToast('Invalid coupon code!', 'error');
        updateTotals();
    }
};

window.updateCart = function() {
    renderCart();
    showToast('Cart updated successfully!', 'success');
};

// Checkout flow
const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cart = getCart();
        if (cart.length === 0) {
            showToast('Your cart is empty. Please add products first!', 'error');
            return;
        }
        showToast('Thank you! Your order has been placed successfully.', 'success');
        localStorage.removeItem('cartyra_cart');
        localStorage.removeItem('cartyra_coupon_code');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2200);
    });
}

// <------------------- Login & Register Form Mock Submission ------------------->
const loginForm = document.querySelector('.wrapper form');
if (loginForm && !loginForm.id) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login successful! Welcome back to Cartyra.', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const psw = document.getElementById('regPassword').value;
        const confirmPsw = document.getElementById('regConfirmPassword').value;
        
        if (psw !== confirmPsw) {
            showToast('Passwords do not match!', 'error');
            return;
        }
        
        showToast('Registration successful! Redirecting to login...', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// Initialize components on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadges();
    
    // If on cart page, fill coupon input and render cart
    if (document.getElementById('cartBody')) {
        const savedCoupon = localStorage.getItem('cartyra_coupon_code');
        const couponInput = document.getElementById('couponInput');
        const couponMsg = document.getElementById('couponMsg');
        if (savedCoupon && couponInput) {
            couponInput.value = savedCoupon;
            if (couponMsg) {
                couponMsg.style.display = 'block';
                couponMsg.style.color = '#088178';
                const percent = savedCoupon === 'SAVE10' ? '10%' : '20%';
                couponMsg.textContent = `Coupon ${savedCoupon} applied successfully! You got ${percent} off.`;
            }
        }
        renderCart();
    }

    // Sitewide Search bar handler
    const searchInputs = document.querySelectorAll('.search input');
    searchInputs.forEach(input => {
        // keypress listener (Enter key)
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
        
        // Find sibling magnifying glass icon
        const searchIcon = input.nextElementSibling || input.parentElement.querySelector('i');
        if (searchIcon) {
            searchIcon.addEventListener('click', () => {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            });
        }
    });

    // Filter shop page products if URL has search param
    if (window.location.pathname.includes('shop.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            const query = searchQuery.trim().toLowerCase();
            const proContainer = document.querySelector('#product1 .pro-container');
            const proCards = document.querySelectorAll('#product1 .pro');
            
            // Set input value to the search query so they see what they searched for
            const headerSearchInput = document.querySelector('.search input');
            if (headerSearchInput) {
                headerSearchInput.value = searchQuery;
            }
            
            // Create a results header banner
            let resultsHeader = document.getElementById('search-results-banner');
            if (!resultsHeader) {
                resultsHeader = document.createElement('div');
                resultsHeader.id = 'search-results-banner';
                resultsHeader.style.width = '100%';
                resultsHeader.style.margin = '0 auto 30px auto';
                resultsHeader.style.textAlign = 'center';
                resultsHeader.style.fontSize = '18px';
                resultsHeader.style.fontWeight = '600';
                resultsHeader.style.color = '#222';
                
                // Insert it right before the product container
                if (proContainer) {
                    proContainer.parentNode.insertBefore(resultsHeader, proContainer);
                }
            }
            
            let visibleCount = 0;
            
            proCards.forEach(card => {
                const imgEl = card.querySelector('img');
                if (!imgEl) return;
                
                const imgPath = imgEl.getAttribute('src');
                const filename = imgPath.substring(imgPath.lastIndexOf('/') + 1, imgPath.lastIndexOf('.'));
                
                const product = products[filename];
                let isMatch = false;
                
                if (product) {
                    const name = product.name.toLowerCase();
                    const brand = product.brand.toLowerCase();
                    const category = product.category.toLowerCase();
                    const desc = product.description.toLowerCase();
                    
                    if (name.includes(query) || brand.includes(query) || category.includes(query) || desc.includes(query)) {
                        isMatch = true;
                    }
                } else {
                    // Fallback search in HTML text
                    const brandText = (card.querySelector('.des span')?.textContent || '').toLowerCase();
                    const nameText = (card.querySelector('.des h5')?.textContent || '').toLowerCase();
                    if (brandText.includes(query) || nameText.includes(query)) {
                        isMatch = true;
                    }
                }
                
                if (isMatch) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Render results details
            if (resultsHeader) {
                resultsHeader.innerHTML = `
                    Showing search results for "<span style="color:#088178;">${searchQuery}</span>" 
                    (${visibleCount} product${visibleCount !== 1 ? 's' : ''} found)
                    <button id="clear-search-btn" style="margin-left:15px; padding:6px 14px; background:#088178; color:#fff; border:none; border-radius:4px; font-size:12px; cursor:pointer; font-weight:600; font-family:'Spartan',sans-serif;">Clear Search</button>
                `;
                
                // Add clear search event handler
                document.getElementById('clear-search-btn').addEventListener('click', () => {
                    window.location.href = 'shop.html';
                });
            }
            
            // Handle empty results
            let emptyMsg = document.getElementById('search-empty-msg');
            if (visibleCount === 0) {
                if (!emptyMsg && proContainer) {
                    emptyMsg = document.createElement('div');
                    emptyMsg.id = 'search-empty-msg';
                    emptyMsg.style.width = '100%';
                    emptyMsg.style.padding = '50px 20px';
                    emptyMsg.style.textAlign = 'center';
                    emptyMsg.innerHTML = `
                        <i class="fa-solid fa-magnifying-glass" style="font-size: 48px; color: #ccc; margin-bottom: 15px; display: block;"></i>
                        <h3 style="font-size: 20px; color: #222; margin-bottom: 10px;">No products found!</h3>
                        <p style="font-size: 14px; color: #777; margin-bottom: 20px;">We couldn't find any products matching "${searchQuery}".</p>
                        <button id="view-all-products-btn" style="padding:10px 25px; background:#088178; color:#fff; border:none; border-radius:4px; cursor:pointer; font-weight:700; font-family:'Spartan',sans-serif;">View All Products</button>
                    `;
                    proContainer.appendChild(emptyMsg);
                } else if (emptyMsg) {
                    emptyMsg.style.display = 'block';
                }
                
                const viewAllBtn = document.getElementById('view-all-products-btn');
                if (viewAllBtn) {
                    viewAllBtn.addEventListener('click', () => {
                        window.location.href = 'shop.html';
                    });
                }
            } else {
                if (emptyMsg) {
                    emptyMsg.style.display = 'none';
                }
            }
        }
    }
});
