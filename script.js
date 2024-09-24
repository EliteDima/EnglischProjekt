// JavaScript to handle button actions and interactivity

// Show an alert when a form is submitted
function submitForm() {
    alert("Your message has been submitted successfully!");
}

// Handle smooth scrolling for links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
