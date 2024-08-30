document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));
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
            id: 3,
            title: "Java for Beginners",
            image: "assets/images/java.png",
            description: "Updated August 2024. 40 total hours · Beginners · Subtitles",
            highlights: [
                "Understand the fundamentals of Java programming",
                "Learn basic syntax, data types, and control structures",
                "Get hands-on experience with simple Java applications",
                "Explore object-oriented programming concepts",
                "Develop problem-solving skills through coding exercises"
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
    ];

    const course = courses.find(c => c.id === courseId);
    if (course) {
        const courseDetails = document.getElementById('courseDetails');
        courseDetails.innerHTML = `
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-7"> <!-- Adjusted column width -->
            <div class="card custom-card"> <!-- Added custom class -->
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <h6 class="card-subtitle mb-2 text-muted">Highlights:</h6>
                    <ul class="highlight-list">
                        ${course.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                    <a href="#" class="btn btn-success mt-3">Enrolled</a>
                    <a href="course-content.html?id=${courseId}" class="btn btn-secondary mt-3">More Info</a>

                </div>
            </div>
        </div>
    </div>
</div>`;
    } else {
        document.getElementById('courseDetails').innerHTML = '<p>Course not found.</p>';
    }
});