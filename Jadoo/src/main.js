import './main.css';
console.log("Tailwind with Vite is running 🚀");

// Mobile menu toggle with dynamic spacing
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const heroSection = document.querySelector('main > section:first-child');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                // Open menu
                mobileMenu.classList.remove('hidden');

                // Add margin to content below after menu is visible
                setTimeout(() => {
                    const menuHeight = mobileMenu.offsetHeight;
                    if (heroSection) {
                        heroSection.style.marginTop = `${menuHeight}px`;
                        heroSection.style.transition = 'margin-top 0.3s ease';
                    }
                }, 10);

                // Animate hamburger to X
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                // Close menu
                mobileMenu.classList.add('hidden');

                // Remove margin from content below
                if (heroSection) {
                    heroSection.style.marginTop = '0';
                }

                // Reset hamburger
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (heroSection) {
                    heroSection.style.marginTop = '0';
                }

                // Reset hamburger
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});
