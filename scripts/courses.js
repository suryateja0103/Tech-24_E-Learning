console.log('courses.js is loaded');

// Function to filter courses based on search input
function filterCourses(query) {
    const courseCards = document.querySelectorAll('.card');
    query = query.toLowerCase();
    courseCards.forEach(card => {
        const courseName = card.querySelector('.card-title').textContent.toLowerCase();
        if (courseName.includes(query)) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const courseContainer = document.getElementById('courseContainer');

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            filterCourses(query);
        });

        // Optionally: Search on 'Enter' key press
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // Course data
    const courses = [
        {
            id: 1,
            title: "The Complete C++ Developer Course",
            image: "assets/images/C++.png",
            description: "Updated August 2024. 55.5 total hours · All Levels · Subtitles",
            highlights: [
                "Begin DevOps Career As an Absolute Beginner",
                "Learn DevOps from total scratch",
                "Understand how various technologies work together in DevOps & GitOps"
            ]
        },
        {
            id: 2,
            title: "JavaScript Essentials",
            image: "assets/images/js.png",
            description: "Updated July 2024. 40 total hours · Beginner to Intermediate · Subtitles",
            highlights: [
                "Understand core JavaScript concepts",
                "Practice with real-world projects",
                "Master DOM manipulation and events"
            ]
        },
        {
            id: 4,
            title: "Python for Beginners",
            image: "assets/images/Python.png",
            description: "Updated August 2024. 50 total hours · Beginners · Subtitles",
            highlights: [
                "Learn the fundamentals of Python programming",
                "Understand basic syntax, data types, and control flow",
                "Develop simple Python applications",
                "Explore core concepts like functions, modules, and error handling",
                "Work on practical projects to reinforce learning"
            ]
        },
        {
            id: 5,
            title: "AWS for Beginners",
            image: "assets/images/aws.png",
            description: "Updated August 2024. 60 total hours · Beginners · Subtitles",
            highlights: [
                "Introduction to Amazon Web Services (AWS)",
                "Understanding core AWS services like EC2, S3, and RDS",
                "Learn to set up and manage AWS infrastructure",
                "Explore best practices for security and cost management",
                "Hands-on labs and projects to apply your knowledge"
            ]
        },
        {
            id: 6,
            title: "MongoDB for Beginners",
            image: "assets/images/mongodb.png",
            description: "Updated August 2024. 50 total hours · Beginners · Subtitles",
            highlights: [
                "Introduction to MongoDB and NoSQL databases",
                "Understanding MongoDB's data model and architecture",
                "Learn basic CRUD operations (Create, Read, Update, Delete)",
                "Working with MongoDB queries and indexing",
                "Integrating MongoDB with various programming languages",
                "Hands-on projects to build real-world applications"
            ]
        },
        {
            id: 7,
            title: "R for Beginners",
            image: "assets/images/R.png",
            description: "Updated August 2024. 50 total hours · Beginners · Subtitles",
            highlights: [
                "Introduction to the R programming language",
                "Understanding R's basic syntax and data types",
                "Performing data manipulation and analysis",
                "Visualizing data with R's plotting libraries",
                "Applying statistical methods and functions",
                "Hands-on projects to practice your skills"
            ]
        },
        {
            id: 8,
            title: "React for Beginners",
            image: "assets/images/react.png",
            description: "Updated August 2024. 55 total hours · Beginners · Subtitles",
            highlights: [
                "Introduction to React and its core concepts",
                "Understanding components, props, and state",
                "Building interactive user interfaces with React",
                "Managing application state with React hooks",
                "Exploring routing and navigation in React applications",
                "Hands-on projects to build real-world React apps"
            ]
        }
        // Other courses...
    ];

    // Render courses
    if (courseContainer) {
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'col-md-4 mb-4';
            courseDiv.setAttribute('data-course', course.title); // Set data-course attribute for filtering
            courseDiv.innerHTML = `
                <div class="card">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <a href="course-details.html?id=${course.id}" class="btn btn-primary mt-2">Enroll</a>
                    </div>
                </div>
            `;
            courseContainer.appendChild(courseDiv);
        });
    } else {
        console.error('Course container not found');
    }

    // Hover effect for course preview
    const courseCards = document.querySelectorAll('.card');
    courseCards.forEach(card => {
        const courseImage = card.querySelector('.card-img-top');
        const courseDetails = card.querySelector('.card-body');

        if (courseImage && courseDetails) {
            card.addEventListener('mouseover', () => {
                courseDetails.style.display = 'block';
            });

            card.addEventListener('mouseout', () => {
                courseDetails.style.display = 'none';
            });
        }
    });
});

