// Navigation functionality with animations
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const diagramSections = document.querySelectorAll('.diagram-section');
    const backToTopLinks = document.querySelectorAll('.back-to-top a');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Function to show a specific section with animation
    function showSection(sectionId) {
        // Hide all sections with fade out
        diagramSections.forEach(section => {
            if (section.classList.contains('active')) {
                section.style.opacity = '0';
                setTimeout(() => {
                    section.classList.remove('active');
                }, 300);
            }
        });

        // Show the selected section with fade in
        setTimeout(() => {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.opacity = '0';
                // Trigger reflow
                targetSection.offsetHeight;
                targetSection.style.opacity = '1';
            }
        }, 350);

        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listeners to navigation links with animation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Add active state animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Add click event listeners to back to top links
    backToTopLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Hide all sections with fade out
            diagramSections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.classList.remove('active');
                    }, 300);
                }
            });

            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Show navigation by default (no sections active)
    diagramSections.forEach(section => {
        section.classList.remove('active');
    });

    // Add parallax effect to header on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - add subtle shadow
            header.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.15)';
        } else {
            // Scrolling up - normal shadow
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // Add smooth reveal animation for key points when section becomes active
    const revealKeyPoints = function(section) {
        const keyPoints = section.querySelectorAll('.key-point');
        keyPoints.forEach((point, index) => {
            setTimeout(() => {
                point.style.opacity = '0';
                point.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    point.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    point.style.opacity = '1';
                    point.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    };

    // Observe section visibility for key point animations
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('active')) {
                revealKeyPoints(entry.target);
            }
        });
    }, { threshold: 0.3 });

    diagramSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add loading animation complete event
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
