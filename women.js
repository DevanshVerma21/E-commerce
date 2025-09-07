// Women's Page JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Product data for women's collection
const womenProducts = [
    {
        id: 1,
        name: "Elegant Silk Evening Dress",
        brand: "ComGen",
        category: "dresses",
        price: 249.99,
        originalPrice: 329.99,
        image: "women images/Elegant Silk Evening Dress.jpg",
        rating: 4.9,
        reviews: 156,
        description: "Luxurious silk evening dress with elegant draping and timeless sophistication. Perfect for special occasions and formal events.",
        badge: "featured",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Burgundy", "Emerald"],
        inStock: true
    },
    {
        id: 2,
        name: "Cashmere Blend Sweater",
        brand: "Elegance",
        category: "tops",
        price: 168.99,
        originalPrice: 219.99,
        image: "women images/Cashmere Blend Sweater.jpg",
        rating: 4.7,
        reviews: 203,
        description: "Soft cashmere blend sweater with a relaxed fit. Perfect for layering or wearing alone during cooler weather.",
        badge: "sale",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Cream", "Blush", "Grey", "Camel"],
        inStock: true
    },
    {
        id: 3,
        name: "High-Waisted Tailored Trousers",
        brand: "Contemporary",
        category: "bottoms",
        price: 128.99,
        originalPrice: null,
        image: "women images/High-Waisted Tailored Trousers.jpg",
        rating: 4.6,
        reviews: 178,
        description: "Modern high-waisted trousers with a tailored fit. Versatile enough for office wear or evening occasions.",
        badge: "new",
        sizes: ["24", "26", "28", "30", "32", "34"],
        colors: ["Black", "Navy", "Charcoal", "Beige"],
        inStock: true
    },
    {
        id: 4,
        name: "Designer Leather Handbag",
        brand: "Chic",
        category: "accessories",
        price: 389.99,
        originalPrice: 489.99,
        image: "women images/Designer Leather Handbag.jpg",
        rating: 4.8,
        reviews: 124,
        description: "Premium leather handbag with gold hardware and spacious interior. A timeless piece that complements any outfit.",
        badge: "trending",
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Tan", "Red"],
        inStock: true
    },
    {
        id: 5,
        name: "Floral Print Midi Dress",
        brand: "ComGen",
        category: "dresses",
        price: 145.99,
        originalPrice: 189.99,
        image: "women images/Floral Print Midi Dress.jpg",
        rating: 4.5,
        reviews: 267,
        description: "Beautiful floral print midi dress with a flattering A-line silhouette. Perfect for daytime events and brunches.",
        badge: "sale",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Floral Blue", "Floral Pink", "Floral Green"],
        inStock: true
    },
    {
        id: 6,
        name: "Wool Blend Blazer",
        brand: "Elegance",
        category: "outerwear",
        price: 219.99,
        originalPrice: null,
        image: "women images/Wool Blend Blazer.avif",
        rating: 4.7,
        reviews: 145,
        description: "Sophisticated wool blend blazer with structured shoulders and a tailored fit. Essential for professional wardrobe.",
        badge: "featured",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Grey", "Camel"],
        inStock: true
    },
    {
        id: 7,
        name: "Silk Blouse with Bow Detail",
        brand: "Chic",
        category: "tops",
        price: 118.99,
        originalPrice: 149.99,
        image: "women images/Silk Blouse with Bow Detail.webp",
        rating: 4.6,
        reviews: 189,
        description: "Elegant silk blouse featuring delicate bow detail at the neck. Perfect for both office and evening wear.",
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Blush", "Black", "Navy"],
        inStock: true
    },
    {
        id: 8,
        name: "Premium Denim Jacket",
        brand: "Contemporary",
        category: "outerwear",
        price: 156.99,
        originalPrice: 199.99,
        image: "women images/Premium Denim Jacket.jpg",
        rating: 4.4,
        reviews: 234,
        description: "Classic denim jacket with modern updates and premium finishing. A versatile piece for casual styling.",
        badge: "sale",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Light Blue", "Dark Blue", "Black", "White"],
        inStock: true
    },
    {
        id: 9,
        name: "Statement Gold Necklace",
        brand: "Chic",
        category: "accessories",
        price: 89.99,
        originalPrice: null,
        image: "women images/Statement Gold Necklace.jpg",
        rating: 4.8,
        reviews: 312,
        description: "Bold statement necklace in gold-plated brass. Perfect for elevating any outfit with a touch of glamour.",
        badge: "trending",
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Rose Gold"],
        inStock: true
    },
    {
        id: 10,
        name: "Cocktail Party Dress",
        brand: "ComGen",
        category: "formal",
        price: 289.99,
        originalPrice: 369.99,
        image: "women images/Cocktail Party Dress.jpg",
        rating: 4.9,
        reviews: 98,
        description: "Stunning cocktail dress with sequin details and flattering silhouette. Perfect for parties and special occasions.",
        badge: "featured",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Emerald", "Rose Gold"],
        inStock: true
    },
    {
        id: 11,
        name: "Casual Cotton T-Shirt",
        brand: "Contemporary",
        category: "casual",
        price: 34.99,
        originalPrice: 49.99,
        image: "women images/Casual Cotton T-Shirt.jpg",
        rating: 4.3,
        reviews: 456,
        description: "Soft organic cotton t-shirt with a relaxed fit. Perfect for everyday casual wear and weekend activities.",
        badge: "sale",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Grey", "Pink", "Blue"],
        inStock: true
    },
    {
        id: 12,
        name: "Elegant Pearl Earrings",
        brand: "Elegance",
        category: "accessories",
        price: 129.99,
        originalPrice: 159.99,
        image: "women images/Elegant Pearl Earrings.jpg",
        rating: 4.7,
        reviews: 187,
        description: "Classic pearl drop earrings with sterling silver settings. Timeless elegance for any occasion.",
        badge: "new",
        sizes: ["One Size"],
        colors: ["Pearl White", "Rose Pearl", "Black Pearl"],
        inStock: true
    }
];

// Global variables
let filteredProducts = [...womenProducts];
let currentPage = 1;
const productsPerPage = 12;
let cart = JSON.parse(localStorage.getItem('womenCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('womenWishlist')) || [];
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
        productCard.classList.add('fade-in');
        grid.appendChild(productCard);
    });
    
    // Add fade-in animation
    setTimeout(() => {
        const newCards = grid.querySelectorAll('.fade-in');
        newCards.forEach(card => card.style.opacity = '1');
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
    card.className = 'product-card elegant';
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
    
    filteredProducts = womenProducts.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        const brandMatch = brand === 'all' || product.brand.toLowerCase() === brand;
        
        let priceMatch = true;
        if (price !== 'all') {
            const [min, max] = price.split('-').map(p => p.replace('+', ''));
            if (max) {
                priceMatch = product.price >= parseInt(min) && product.price <= parseInt(max);
            } else {
                priceMatch = product.price >= parseInt(min);
            }
        }
        
        return categoryMatch && brandMatch && priceMatch;
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
            default:
                return 0;
        }
    });
    
    currentPage = 1;
    displayProducts();
}

// Search functionality
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (!searchTerm) {
        filteredProducts = [...womenProducts];
    } else {
        filteredProducts = womenProducts.filter(product =>
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
    
    filteredProducts = [...womenProducts];
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
    const product = womenProducts.find(p => p.id === productId);
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
        'Burgundy': '#800020',
        'Emerald': '#50c878',
        'Cream': '#f5f5dc',
        'Blush': '#de6fa1',
        'Grey': '#808080',
        'Camel': '#c19a6b',
        'Charcoal': '#36454f',
        'Beige': '#f5f5dc',
        'Brown': '#8b4513',
        'Tan': '#d2b48c',
        'Red': '#ff0000',
        'Floral Blue': '#6495ed',
        'Floral Pink': '#ff69b4',
        'Floral Green': '#90ee90',
        'Light Blue': '#add8e6',
        'Dark Blue': '#00008b',
        'Rose Gold': '#e8b4b8',
        'Gold': '#ffd700',
        'Silver': '#c0c0c0',
        'Pink': '#ffc0cb',
        'Blue': '#0000ff',
        'Pearl White': '#f8f6f0',
        'Rose Pearl': '#f4c2c2',
        'Black Pearl': '#16161d'
    };
    return colorCodes[colorName] || '#cccccc';
}

// Cart functionality
function addToCart(productId) {
    const product = womenProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            size: 'M',
            color: product.colors[0]
        });
    }
    
    localStorage.setItem('womenCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
    showNotification(`${product.name} added to cart!`);
}

function addToCartFromModal() {
    const modal = document.getElementById('quick-view-modal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const selectedSize = document.querySelector('.size-btn.selected')?.textContent || 'M';
    const selectedColor = document.querySelector('.color-btn.selected')?.title || 'Default';
    
    const product = womenProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.id === productId && item.size === selectedSize && item.color === selectedColor
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            size: selectedSize,
            color: selectedColor
        });
    }
    
    localStorage.setItem('womenCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
    showNotification(`${product.name} added to cart!`);
    closeQuickView();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('womenCart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('womenCart', JSON.stringify(cart));
        updateCartCount();
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
    
    if (cartSidebar.classList.contains('active')) {
        updateCartSidebar();
    }
}

// Wishlist functionality
function toggleWishlist(productId) {
    const product = womenProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification(`${product.name} removed from wishlist!`);
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    localStorage.setItem('womenWishlist', JSON.stringify(wishlist));
}

function toggleWishlistFromModal() {
    const modal = document.getElementById('quick-view-modal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    toggleWishlist(productId);
}

// Utility functions
function updateProductCount() {
    const count = filteredProducts.length;
    const displaying = Math.min(currentPage * productsPerPage, count);
    document.getElementById('products-count').textContent = 
        `Showing ${displaying} of ${count}+ products`;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--accent);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-premium);
        z-index: 1001;
        transition: var(--transition-smooth);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    if (email) {
        showNotification('Thank you for subscribing to our women\'s fashion updates!');
        event.target.querySelector('input[type="email"]').value = '';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }
    
    // Initialize Lucide icons
    lucide.createIcons();
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
    
    // Reinitialize icons after change
    lucide.createIcons();
}
