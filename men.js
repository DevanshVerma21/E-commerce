// Men's Page JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Product data
const menProducts = [
    {
        id: 1,
        name: "Premium Cotton Dress Shirt",
        brand: "ComGen",
        category: "shirts",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=669&auto=format&fit=crop",
        rating: 4.8,
        reviews: 124,
        description: "Crafted from premium Egyptian cotton with a modern slim fit. Perfect for professional settings and formal occasions.",
        badge: "new",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Light Blue", "Navy"],
        inStock: true
    },
    {
        id: 2,
        name: "Slim Fit Dark Wash Jeans",
        brand: "Premium",
        category: "pants",
        price: 128.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=626&auto=format&fit=crop",
        rating: 4.6,
        reviews: 89,
        description: "Modern slim-fit jeans with premium denim fabric and comfortable stretch. Perfect for casual and smart-casual looks.",
        badge: "sale",
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Dark Blue", "Black", "Grey"],
        inStock: true
    },
    {
        id: 3,
        name: "Italian Leather Jacket",
        brand: "Classic",
        category: "jackets",
        price: 299.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=625&auto=format&fit=crop",
        rating: 4.9,
        reviews: 67,
        description: "Genuine Italian leather jacket with timeless design. Handcrafted with attention to detail and superior quality.",
        badge: "featured",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown", "Cognac"],
        inStock: true
    },
    {
        id: 4,
        name: "Cashmere Blend Sweater",
        brand: "ComGen",
        category: "shirts",
        price: 156.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=687&auto=format&fit=crop",
        rating: 4.7,
        reviews: 156,
        description: "Luxurious cashmere blend sweater with a comfortable crew neck design. Perfect for layering or wearing alone.",
        badge: "sale",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Grey", "Charcoal", "Burgundy"],
        inStock: true
    },
    {
        id: 5,
        name: "Tailored Chino Pants",
        brand: "Modern",
        category: "pants",
        price: 79.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=687&auto=format&fit=crop",
        rating: 4.5,
        reviews: 203,
        description: "Classic tailored chinos with a modern fit. Versatile enough for office wear or weekend casual.",
        badge: null,
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Khaki", "Navy", "Black", "Olive"],
        inStock: true
    },
    {
        id: 6,
        name: "Luxury Swiss Watch",
        brand: "Premium",
        category: "accessories",
        price: 449.99,
        originalPrice: 599.99,
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=688&auto=format&fit=crop",
        rating: 4.9,
        reviews: 78,
        description: "Swiss-made luxury timepiece with automatic movement and sapphire crystal. A perfect blend of elegance and precision.",
        badge: "sale",
        sizes: ["One Size"],
        colors: ["Silver", "Gold", "Black"],
        inStock: true
    },
    {
        id: 7,
        name: "Wool Blend Overcoat",
        brand: "Classic",
        category: "jackets",
        price: 249.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=688&auto=format&fit=crop",
        rating: 4.6,
        reviews: 92,
        description: "Elegant wool blend overcoat with classic tailoring. Perfect for professional settings and formal occasions.",
        badge: "new",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Charcoal", "Camel"],
        inStock: true
    },
    {
        id: 8,
        name: "Formal Tuxedo Set",
        brand: "ComGen",
        category: "formal",
        price: 399.99,
        originalPrice: 499.99,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=640&auto=format&fit=crop",
        rating: 4.8,
        reviews: 45,
        description: "Complete tuxedo set with jacket, pants, and bow tie. Perfect for weddings, galas, and formal events.",
        badge: "featured",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy"],
        inStock: true
    },
    {
        id: 9,
        name: "Casual Polo Shirt",
        brand: "Modern",
        category: "casual",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=687&auto=format&fit=crop",
        rating: 4.4,
        reviews: 234,
        description: "Comfortable cotton polo shirt with a classic fit. Perfect for casual outings and weekend wear.",
        badge: "sale",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Navy", "Black", "Red"],
        inStock: true
    },
    {
        id: 10,
        name: "Leather Belt Set",
        brand: "Premium",
        category: "accessories",
        price: 69.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=687&auto=format&fit=crop",
        rating: 4.5,
        reviews: 167,
        description: "Premium leather belt set with reversible design. Includes black and brown sides with gold buckle.",
        badge: null,
        sizes: ["32", "34", "36", "38", "40", "42"],
        colors: ["Black/Brown"],
        inStock: true
    },
    {
        id: 11,
        name: "Performance Athletic Wear",
        brand: "Modern",
        category: "casual",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=688&auto=format&fit=crop",
        rating: 4.7,
        reviews: 312,
        description: "High-performance athletic set with moisture-wicking technology. Perfect for workouts and active lifestyle.",
        badge: "new",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Grey", "Navy"],
        inStock: true
    },
    {
        id: 12,
        name: "Classic Oxford Shoes",
        brand: "Classic",
        category: "formal",
        price: 179.99,
        originalPrice: 229.99,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=640&auto=format&fit=crop",
        rating: 4.8,
        reviews: 145,
        description: "Handcrafted Oxford shoes with premium leather and classic styling. Perfect for formal and business attire.",
        badge: "sale",
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["Black", "Brown"],
        inStock: true
    }
];

// Global variables
let filteredProducts = [...menProducts];
let currentPage = 1;
const productsPerPage = 12;
let cart = JSON.parse(localStorage.getItem('menCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('menWishlist')) || [];
let currentView = 'grid';

// Initialize page
function initializePage() {
    displayProducts();
    updateCartCount();
    updateProductCount();
    lucide.createIcons();
}

// Display products
function displayProducts() {
    const grid = document.getElementById('products-grid');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    if (currentPage === 1) {
        grid.innerHTML = '';
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
    
    // Add fade-in animation
    setTimeout(() => {
        const newCards = grid.querySelectorAll('.product-card:not(.fade-in)');
        newCards.forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
    
    // Update load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (endIndex >= filteredProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    lucide.createIcons();
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-brand', product.brand.toLowerCase());
    card.setAttribute('data-price', product.price);
    
    const discountPercentage = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : ''}
            <div class="product-overlay">
                <button class="btn btn-primary" onclick="openQuickView(${product.id})">
                    <i data-lucide="eye"></i>
                    Quick View
                </button>
                <button class="btn btn-outline" onclick="toggleWishlist(${product.id})">
                    <i data-lucide="heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-text">(${product.rating}) ${product.reviews} reviews</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                ${discountPercentage > 0 ? `<span class="discount-badge">${discountPercentage}% OFF</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="btn btn-accent" onclick="addToCart(${product.id})">
                    <i data-lucide="shopping-cart"></i>
                    Add to Cart
                </button>
                <button class="btn btn-outline" onclick="openQuickView(${product.id})">
                    <i data-lucide="eye"></i>
                    Quick View
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter functionality
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const price = document.getElementById('price-filter').value;
    const brand = document.getElementById('brand-filter').value;
    
    filteredProducts = menProducts.filter(product => {
        let matches = true;
        
        // Category filter
        if (category !== 'all' && product.category !== category) {
            matches = false;
        }
        
        // Price filter
        if (price !== 'all') {
            const [min, max] = price.split('-').map(p => p.replace('+', ''));
            const minPrice = parseFloat(min);
            const maxPrice = max ? parseFloat(max) : Infinity;
            
            if (product.price < minPrice || product.price > maxPrice) {
                matches = false;
            }
        }
        
        // Brand filter
        if (brand !== 'all' && product.brand.toLowerCase() !== brand) {
            matches = false;
        }
        
        return matches;
    });
    
    currentPage = 1;
    displayProducts();
    updateProductCount();
}

// Sort functionality
function sortProducts() {
    const sortBy = document.getElementById('sort-filter').value;
    
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id;
            case 'featured':
            default:
                // Featured items first, then by rating
                const aFeatured = a.badge === 'featured' ? 1 : 0;
                const bFeatured = b.badge === 'featured' ? 1 : 0;
                if (aFeatured !== bFeatured) {
                    return bFeatured - aFeatured;
                }
                return b.rating - a.rating;
        }
    });
    
    currentPage = 1;
    displayProducts();
}

// Search functionality
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (!searchTerm) {
        filteredProducts = [...menProducts];
    } else {
        filteredProducts = menProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayProducts();
    updateProductCount();
}

// Clear filters
function clearFilters() {
    document.getElementById('category-filter').value = 'all';
    document.getElementById('price-filter').value = 'all';
    document.getElementById('brand-filter').value = 'all';
    document.getElementById('sort-filter').value = 'featured';
    document.getElementById('search-input').value = '';
    
    filteredProducts = [...menProducts];
    currentPage = 1;
    displayProducts();
    updateProductCount();
}

// Apply filters (for mobile)
function applyFilters() {
    filterProducts();
    toggleFilters(); // Close mobile filters
}

// Toggle filters (mobile)
function toggleFilters() {
    const filtersContainer = document.getElementById('filters-container');
    filtersContainer.classList.toggle('active');
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    displayProducts();
}

// Set view (grid/list)
function setView(view) {
    currentView = view;
    const grid = document.getElementById('products-grid');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    if (view === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// Quick view modal
function openQuickView(productId) {
    const product = menProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quick-view-modal');
    const modalImage = document.getElementById('modal-product-image');
    const modalName = document.getElementById('modal-product-name');
    const modalRating = document.getElementById('modal-rating');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const modalBadges = document.getElementById('modal-badges');
    const sizeOptions = document.getElementById('size-options');
    const colorOptions = document.getElementById('color-options');
    
    // Populate modal
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;
    
    // Rating
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    modalRating.innerHTML = `
        <div class="stars">${stars}</div>
        <span class="rating-text">(${product.rating}) ${product.reviews} reviews</span>
    `;
    
    // Price
    const discountPercentage = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    modalPrice.innerHTML = `
        <span class="current-price">$${product.price}</span>
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
        ${discountPercentage > 0 ? `<span class="discount-badge">${discountPercentage}% OFF</span>` : ''}
    `;
    
    // Description
    modalDescription.innerHTML = `<p>${product.description}</p>`;
    
    // Badges
    modalBadges.innerHTML = product.badge ? `<div class="product-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : '';
    
    // Sizes
    sizeOptions.innerHTML = product.sizes.map(size => 
        `<button class="size-btn" onclick="selectSize(this)">${size}</button>`
    ).join('');
    
    // Colors
    colorOptions.innerHTML = product.colors.map(color => 
        `<button class="color-btn" style="background: ${getColorCode(color)}" onclick="selectColor(this)" title="${color}"></button>`
    ).join('');
    
    // Store current product for modal actions
    modal.setAttribute('data-product-id', productId);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    lucide.createIcons();
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function selectSize(button) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function selectColor(button) {
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function getColorCode(colorName) {
    const colorCodes = {
        'White': '#ffffff',
        'Black': '#000000',
        'Navy': '#001f3f',
        'Light Blue': '#87ceeb',
        'Grey': '#808080',
        'Charcoal': '#36454f',
        'Brown': '#8b4513',
        'Cognac': '#9f4a00',
        'Burgundy': '#800020',
        'Khaki': '#c3b091',
        'Olive': '#808000',
        'Silver': '#c0c0c0',
        'Gold': '#ffd700',
        'Red': '#ff0000',
        'Dark Blue': '#000080',
        'Camel': '#c19a6b',
        'Black/Brown': '#000000'
    };
    return colorCodes[colorName] || '#cccccc';
}

// Cart functionality
function addToCart(productId) {
    const product = menProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: 'M', // Default size
            color: product.colors[0] // Default color
        });
    }
    
    localStorage.setItem('menCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
    showNotification(`${product.name} added to cart!`);
}

function addToCartFromModal() {
    const modal = document.getElementById('quick-view-modal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const selectedSize = document.querySelector('.size-btn.selected')?.textContent || 'M';
    const selectedColor = document.querySelector('.color-btn.selected')?.title || 'Default';
    
    const product = menProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.id === productId && item.size === selectedSize && item.color === selectedColor
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: selectedSize,
            color: selectedColor
        });
    }
    
    localStorage.setItem('menCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
    showNotification(`${product.name} added to cart!`);
    closeQuickView();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('menCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('menCart', JSON.stringify(cart));
        updateCartSidebar();
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('mobile-cart-count').textContent = count;
}

function updateCartSidebar() {
    const cartContent = document.getElementById('cart-content');
    const cartFooter = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-bag"></i>
                <p>Your cart is empty</p>
                <button class="btn btn-primary" onclick="toggleCart()">Continue Shopping</button>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartContent.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-options">Size: ${item.size}, Color: ${item.color}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">
                            <i data-lucide="minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">
                            <i data-lucide="plus"></i>
                        </button>
                        <button class="remove-btn" onclick="removeFromCart(${index})">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
        
        cartFooter.style.display = 'block';
    }
    
    lucide.createIcons();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
    updateCartSidebar();
}

// Wishlist functionality
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    
    localStorage.setItem('menWishlist', JSON.stringify(wishlist));
}

function toggleWishlistFromModal() {
    const modal = document.getElementById('quick-view-modal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    toggleWishlist(productId);
}

// Utility functions
function updateProductCount() {
    const count = filteredProducts.length;
    const total = menProducts.length;
    document.getElementById('products-count').textContent = `Showing ${Math.min(currentPage * productsPerPage, count)} of ${count} products`;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-premium);
        z-index: 1001;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!');
        event.target.reset();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    // Search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchProducts);
    
    // Close modal on outside click
    document.getElementById('quick-view-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeQuickView();
        }
    });
    
    // Close cart on outside click
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartBtn = document.querySelector('.cart-btn');
        
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeQuickView();
            if (document.getElementById('cart-sidebar').classList.contains('active')) {
                toggleCart();
            }
        }
    });
});

// Mobile menu toggle (reuse from main JS)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
    } else {
        mobileMenu.classList.add('active');
        menuIcon.setAttribute('data-lucide', 'x');
    }
    
    lucide.createIcons();
}
