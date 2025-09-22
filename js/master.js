// Hide preloader after 1 second
const timeOut = setTimeout(() => {
    const element = document.querySelector('.preloader');
    element.style.display = 'none'; 
}, 1000);

// DOMContentLoaded ensures the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.on');
    const contactButtons = document.querySelectorAll('.contactButton');
    const toggleMenu = document.querySelector('.toggle-menu');
    const navMenu = document.getElementById('navMenu');

    // Function to handle navigation section display
    function navigateToSection(targetSectionId) {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        const targetLink = document.querySelector('a[href="#' + targetSectionId + '"]');
        targetLink.classList.add('active');
        sections.forEach(section => section.classList.remove('active'));
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) targetSection.classList.add('active');
    }

    // Toggle menu event for mobile devices
    toggleMenu.addEventListener('click', function () {
        // Check screen size and height dynamically
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // If the screen width is below 600px
        if (screenWidth <= 600) {
            if (navMenu.style.display === 'none') {
                navMenu.style.display = 'flex'; // Show nav menu
                navMenu.style.flexDirection = 'column';
                navMenu.style.justifyContent = 'center';
                navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                navMenu.style.borderRadius = '10%';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.right = '90%';
                navMenu.style.width = '400%';

                // Adjust height for various screen sizes
                if (screenHeight <= 640 && screenWidth <= 360) {
                    navMenu.style.height = '22vh';
                } else if (screenHeight <= 736) {
                    navMenu.style.height = '20vh';
                } else {
                    navMenu.style.height = '18vh';
                }
            } else {
                navMenu.style.display = 'none'; // Hide nav menu
            }
        }
    });

    // Handle section navigation for nav links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href').substring(1);
            navigateToSection(targetSectionId);
        });
    });

    // Handle 'Contact Me' button clicks
    contactButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = 'contact';
            navigateToSection(targetSectionId);
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // Tab switching logic for work section
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContents.forEach(content => content.style.display = 'none');

            const track = tab.dataset.track;
            document.getElementById(track).style.display = 'flex';
        });
    });

    // Show the first tab by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
});

// AJAX form submission for Formspree
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/xyzngdyo', true); // Replace with your Formspree endpoint
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            document.getElementById('form-message').style.display = 'flex';
            document.getElementById('form-message').style.placeContent = 'center';
            document.getElementById('form-message').innerText = 'Message sent successfully!';
            form.reset();
        } else {
            document.getElementById('form-message').style.display = 'block';
            document.getElementById('form-message').innerText = 'Error sending message. Please try again.';
        }
    };
    xhr.send(formData);
});
