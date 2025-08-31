        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
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

        // Carousel functionality (placeholder - you can enhance this)
        function scrollCarousel(section, direction) {
            // This is a simplified version - you can implement actual carousel scrolling
            console.log(`Scrolling ${section} carousel in direction ${direction}`);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add animation delays to product cards
        document.addEventListener('DOMContentLoaded', function() {
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });

            // Add hover effects to product cards
            productCards.forEach(card => {
                const img = card.querySelector('.product-image img');
                const overlay = card.querySelector('.product-overlay');
                card.addEventListener('mouseenter', () => {
                    if (img && img.style.transform !== undefined) {
                        img.style.transform = 'scale(1.05) rotate(3deg)';
                    }
                });
                card.addEventListener('mouseleave', () => {
                    if (img && img.style.transform !== undefined) {
                        img.style.transform = 'scale(1) rotate(0deg)';
                    }
                });
            });

            // Shoes slideshow functionality
            const slides = document.querySelectorAll('#shoes-slideshow .slide-img');
            let currentSlide = 0;
            function showSlide(idx) {
                slides.forEach((img, i) => {
                    img.style.opacity = (i === idx) ? '1' : '0';
                    img.style.zIndex = (i === idx) ? '2' : '1';
                });
            }
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
            if (slides.length > 0) {
                showSlide(currentSlide);
                setInterval(nextSlide, 5000);
            }
        });
        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to ChicStyle newsletter!');
                this.querySelector('input[type="email"]').value = '';
            }
        });

        // Add to cart functionality (placeholder)
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent.includes('Quick Shop') || btn.textContent.includes('Shop')) {
                btn.addEventListener('click', function() {
                    // Update cart count
                    const cartBadge = document.querySelector('.nav-actions .btn span');
                    if (cartBadge) {
                        const currentCount = parseInt(cartBadge.textContent) || 0;
                        cartBadge.textContent = currentCount + 1;
                    }
                    
                    // Show feedback
                    this.textContent = 'Added!';
                    setTimeout(() => {
                        this.innerHTML = this.innerHTML.includes('Quick Shop') ? 
                            '<i data-lucide="shopping-cart"></i> Quick Shop' : 
                            this.textContent;
                        lucide.createIcons();
                    }, 1500);
                });
            }
        });
