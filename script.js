document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

function filterProjects(category) {
    let projects = document.querySelectorAll('.project-item');
    if (category === 'all') {
        projects.forEach(project => project.style.display = 'block');
    } else {
        projects.forEach(project => {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

function openLightbox(img) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.querySelector(".lightbox-content");
    lightboxImg.src = img.src;
    lightbox.style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
