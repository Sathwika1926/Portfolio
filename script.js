// Smooth scrolling for internal links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scrollToTop', 'btn', 'btn-floating', 'btn-large', 'teal');
scrollToTopBtn.innerHTML = '<i class="material-icons">⬆</i>';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '50px';
scrollToTopBtn.style.right = '50px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';  // Ensure it appears above other elements

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic footer year update
const footer = document.querySelector('footer .container');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Sathwika. All Rights Reserved.`;
