const timeOut = setTimeout(() => {
    const element = document.querySelector('.preloader');
    element.style.display = 'none'; // Change this to your desired hiding method
    }, 1000);

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav ul li a');
    var sections = document.querySelectorAll('.on');
    var contactButtons = document.querySelectorAll('.contactButton'); // Change to plural
    
    // Function to handle section navigation
    function navigateToSection(targetSectionId) {
        // Remove "active" class from all links
            navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
    
        // Add "active" class to the corresponding link
        var targetLink = document.querySelector('a[href="#' + targetSectionId + '"]');
        targetLink.classList.add('active');
    
        // Show or hide sections based on the clicked link
        sections.forEach(function (section) {
            section.classList.remove('active');
        });
    
        // Show the corresponding section based on the link's href
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    // Event listener for navigation links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = link.getAttribute('href').substring(1);
            navigateToSection(targetSectionId);
        });
    });
    
    // Event listener for all "Contact Me" buttons
    contactButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = 'contact';
            navigateToSection(targetSectionId);
    
               // Scroll to the Contact section
            var targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


// ------- New Addition for iPhone Mobiles to make the toggle work properly when clicking on it and show the menu -------
        // Toggle menu functionality using JavaScript click event
        const toggleMenu = document.querySelector('.toggle-menu'); // Select the toggle icon
        const navList = document.querySelector('nav ul'); // Select the nav ul element

        // Add event listener to toggle menu visibility
        toggleMenu.addEventListener('click', function() {
            // Toggle display of the nav list (mobile menu)
            if (navList.style.display === 'none' || navList.style.display === '') {
                navList.style.display = 'flex';  // Show the menu if it's hidden
            } else {
                navList.style.display = 'none';  // Hide the menu if it's visible
            }
        });

        // Ensure menu is hidden initially on small screens
        navList.style.display = 'none'; // Initially hide the mobile menu
        // 
});
    



// document.addEventListener('DOMContentLoaded', function () {
//     var navLinks = document.querySelectorAll('nav ul li a');
//     var container = document.querySelector('.container');
//     var workSection = document.getElementById('work');
//     var homeSection = document.getElementById('home');
//     var contactButton = document.getElementsByClassName('contactButton');

//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();

//             // Remove "active" class from all links
//             navLinks.forEach(function (navLink) {
//                 navLink.classList.remove('active');
//             });

//             // Add "active" class to the clicked link
//             link.classList.add('active');

//             // Show or hide sections based on the clicked link
//             var targetSectionId = link.getAttribute('href').substring(1); // Remove the "#" symbol
//             var targetSection = document.getElementById(targetSectionId);

//             if (targetSectionId === 'home') {
//                 homeSection.classList.add('active');
//                 workSection.classList.remove('active');
//             } else {
//                 homeSection.classList.remove('active');
//                 workSection.classList.add('active');
//             }

//             // Hide all sections except the home section
//             var sections = document.querySelectorAll('.on');
//             sections.forEach(function (section) {
//                 section.classList.remove('active');
//             });

//             // Show the corresponding section based on the link's href
//             if (targetSection) {
//                 homeSection.classList.add('display');
//                 targetSection.classList.add('active');
//             }
//         });
//     });
// });
