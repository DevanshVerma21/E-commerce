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

        function validateEmail(email) {
            return email.includes('@') && email.trim() !== '';
        }

        function showPasswordStep() {
            const email = document.getElementById('email').value;
            if (!email) {
                alert('Please enter your email');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address with @');
                return;
            }

            const emailStep = document.getElementById('emailStep');
            const passwordStep = document.getElementById('passwordStep');
            const passwordSubtitle = passwordStep.querySelector('.subtitle');
            passwordSubtitle.textContent = `Enter your password for ${email}`;

            emailStep.style.display = 'none';
            passwordStep.classList.remove('hidden');
            
            setTimeout(() => {
                passwordStep.classList.add('active');
            }, 50);
        }

        function showEmailStep() {
            const emailStep = document.getElementById('emailStep');
            const passwordStep = document.getElementById('passwordStep');

            passwordStep.classList.remove('active');
            
            setTimeout(() => {
                passwordStep.classList.add('hidden');
                emailStep.style.display = 'block';
            }, 400);
        }

        function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!password) {
                alert('Please enter your password');
                return;
            }

            // Simple validation for demo
            if (password === 'password123') {
                alert('Login successful! Redirecting to home page...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                alert('Invalid password. Try "password123"');
            }
        }

        function showSignup() {
            const loginContainer = document.getElementById('loginContainer');
            const signupContainer = document.getElementById('signupContainer');

            loginContainer.classList.add('hide');
            signupContainer.classList.add('show');
        }

        function showLogin() {
            const loginContainer = document.getElementById('loginContainer');
            const signupContainer = document.getElementById('signupContainer');

            loginContainer.classList.remove('hide');
            signupContainer.classList.remove('show');
        }

        function signup() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (!name || !email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address with @');
                return;
            }

            alert('Account created successfully! Please sign in.');
            showLogin();
        }

       
