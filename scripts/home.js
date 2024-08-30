// Function to change the favicon
function changeFavicon(src) {
    const link = document.getElementById('favicon');
    link.href = src;
}

// Event listeners for changing favicon on hover
document.addEventListener('DOMContentLoaded', () => {
    const faviconDefault = 'assets/images/favicon.jpg';
    const faviconHover = 'assets/images/favicon-hover.jpg'; // Ensure you have a hover state image

    document.querySelectorAll('a').forEach(element => {
        element.addEventListener('mouseover', () => changeFavicon(faviconHover));
        element.addEventListener('mouseout', () => changeFavicon(faviconDefault));
    });
});


// Function to handle horizontal scrolling
function scrollCourses(direction) {
    const container = document.querySelector('.course-container');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Attach event listeners to scroll buttons
document.addEventListener('DOMContentLoaded', () => {
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');

    if (scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener('click', () => scrollCourses(-1));
        scrollRightButton.addEventListener('click', () => scrollCourses(1));
    }
});
