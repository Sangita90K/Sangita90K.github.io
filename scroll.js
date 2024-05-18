window.addEventListener("scroll", function() {
    let projects = document.querySelectorAll('.project-item');
    let windowHeight = window.innerHeight;

    projects.forEach(project => {
        let position = project.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            project.classList.add("show");
        }
    });
});
