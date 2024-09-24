document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector('.team-container');
    const teamMembers = document.querySelectorAll('.team-member');
    
    let currentIndex = 0;

    function slideIn() {
        teamContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % teamMembers.length;
        slideIn();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        slideIn();
    }

    // Automatically slide every 3 seconds
    setInterval(nextSlide, 3000);
});
