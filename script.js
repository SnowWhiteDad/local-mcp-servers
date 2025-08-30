// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const diagramSections = document.querySelectorAll('.diagram-section');
    const backToTopLinks = document.querySelectorAll('.back-to-top a');

    // Function to show a specific section
    function showSection(sectionId) {
        // Hide all sections
        diagramSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Add click event listeners to back to top links
    backToTopLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Hide all sections
            diagramSections.forEach(section => {
                section.classList.remove('active');
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
});
