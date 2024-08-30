document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));

    // Complete list of courses
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
            ],
            syllabus: [
                "Introduction to C++",
                "Basic Syntax and Data Types",
                "Control Structures",
                "Object-Oriented Programming",
                "Advanced Topics"
            ],
            instructor: {
                name: "John Doe",
                bio: "An experienced developer with over 10 years in the industry, specializing in C++ and software architecture.",
                
            },
            videoLink: "https://youtu.be/ZzaPdXTrSb8?feature=shared", 
    documentLink: "https://devdocs.io/cpp/" 
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
            ],
            syllabus: [
                "Introduction to JavaScript",
                "Variables and Data Types",
                "Functions and Scope",
                "DOM Manipulation",
                "Events and Event Handling"
            ],
            instructor: {
                name: "Jane Smith",
                bio: "A seasoned web developer with extensive experience in JavaScript and modern frameworks.",
                
            },
            videoLink: "https://youtu.be/W6NZfCO5SIk?feature=shared", 
            documentLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
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
            ],
            syllabus: [
                "Introduction to Java",
                "Basic Syntax and Data Types",
                "Control Structures",
                "Object-Oriented Programming",
                "Java Collections and Streams"
            ],
            instructor: {
                name: "Emily Johnson",
                bio: "A Java expert with a passion for teaching and over 8 years of experience in software development.",
                
            },
            videoLink: "https://youtu.be/eIrMbAQSU34?feature=shared", 
    documentLink: "https://docs.oracle.com/en/java/" 
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
            ],
            syllabus: [
                "Introduction to Python",
                "Basic Syntax and Data Types",
                "Control Flow and Functions",
                "Modules and Packages",
                "File Handling and Exception Handling"
            ],
            instructor: {
                name: "Michael Brown",
                bio: "A Python specialist with over 12 years of experience in software development and data science.",
            
                
            },
            videoLink: "https://youtu.be/_uQrJ0TkZlc?feature=shared", 
    documentLink: "https://docs.python.org/3/" 
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
            ],
            syllabus: [
                "Introduction to AWS",
                "AWS Core Services: EC2, S3, RDS",
                "AWS IAM and Security",
                "Networking in AWS",
                "Deploying Applications on AWS"
            ],
            instructor: {
                name: "Lisa Davis",
                bio: "A cloud computing expert with a deep knowledge of AWS and over 9 years of industry experience.",
               
            },
            videoLink: "https://youtu.be/B8i49C8fC3E?feature=shared", 
    documentLink: "https://docs.aws.amazon.com/" 
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
            ],
            syllabus: [
                "Introduction to NoSQL Databases",
                "Getting Started with MongoDB",
                "CRUD Operations",
                "Indexing and Aggregation",
                "Integrating MongoDB with Applications"
            ],
            instructor: {
                name: "David Wilson",
                bio: "A database administrator with a focus on NoSQL databases and practical experience with MongoDB.",
             
            },
            videoLink: "https://youtu.be/8eJJe4Slnik?feature=shared", 
    documentLink: "https://www.mongodb.com/docs/" 
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
            ],
            syllabus: [
                "Introduction to R",
                "Data Types and Data Structures",
                "Data Manipulation",
                "Data Visualization",
                "Statistical Analysis and Modeling"
            ],
            instructor: {
                name: "Sarah Martinez",
                bio: "A data scientist with extensive experience in statistical analysis and data visualization using R.",
                
            },
            videoLink: "https://youtu.be/_V8eKsto3Ug?feature=shared", 
    documentLink: "https://www.r-project.org/other-docs.html" 
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
            ],
            syllabus: [
                "Introduction to React",
                "Components and Props",
                "State Management with Hooks",
                "Routing with React Router",
                "Advanced React Concepts"
            ],
            instructor: {
                name: "Robert Johnson",
                bio: "A front-end developer with a strong background in React and modern web development practices.",
                
            },
            videoLink: "https://youtu.be/SqcY0GlETPk?feature=shared", 
    documentLink: "https://legacy.reactjs.org/docs/getting-started.html" 
        }
    ];

    const course = courses.find(c => c.id === courseId);
    if (course) {
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseDescription').textContent = course.description;

        const highlightsList = document.getElementById('courseHighlights');
        highlightsList.innerHTML = course.highlights.map(highlight => `<li>${highlight}</li>`).join('');

        const syllabusList = document.getElementById('courseSyllabus');
        syllabusList.innerHTML = course.syllabus.map(topic => `<li>${topic}</li>`).join('');

        const instructorSection = document.getElementById('instructorSection');
        
        instructorSection.innerHTML = `
    <h6>${course.instructor.name}</h6>
    <p>${course.instructor.bio}</p>
    <a href="${course.videoLink}" target="_blank" class="btn btn-secondary">Video</a>
    <a href="${course.documentLink}" target="_blank" class="btn btn-secondary">Documentation</a>
`;

    } 
    else {
        document.querySelector('.card-body').innerHTML = '<p>Course not found.</p>';
    }
});
