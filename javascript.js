document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        
        if (name && email && message) {
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
});
// Project carousel navigation
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-item");
    let currentProject = 0;

    function showProject(index) {
        projects.forEach((project, idx) => {
            project.style.display = idx === index ? "block" : "none";
        });
    }

    document.querySelector("#prev-project").addEventListener("click", () => {
        currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
        showProject(currentProject);
    });

    document.querySelector("#next-project").addEventListener("click", () => {
        currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
        showProject(currentProject);
    });

    showProject(currentProject);
});

