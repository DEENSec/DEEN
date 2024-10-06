// Select the form and the projects container
const projectForm = document.getElementById('projectForm');
const projectsContainer = document.getElementById('projectsContainer');

// Listen for form submission
projectForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the uploaded image and description
    const imageInput = document.getElementById('projectImage').files[0];
    const description = document.getElementById('projectDescription').value;

    // Check if image and description are provided
    if (imageInput && description) {
        const reader = new FileReader();

        // When the file is loaded, create a project card
        reader.onload = function(event) {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            // Create the image element
            const imageElement = document.createElement('img');
            imageElement.src = event.target.result;

            // Create the description element
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;

            // Append image and description to the card
            projectCard.appendChild(imageElement);
            projectCard.appendChild(descriptionElement);

            // Add the card to the projects container
            projectsContainer.appendChild(projectCard);
        };

        // Read the image file as a data URL
        reader.readAsDataURL(imageInput);

        // Clear the form after submission
        projectForm.reset();
    } else {
        alert('Please upload an image and provide a description!');
    }
});
