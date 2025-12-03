// This file contains the JavaScript code for the personal website.
// It may include functionality such as event listeners, animations, or dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    if (greeting) {
        greeting.textContent = 'Welcome to My Personal Website!';
    }

    const toggleButton = document.getElementById('toggle-theme');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }
});