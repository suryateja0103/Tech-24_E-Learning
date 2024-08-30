document.addEventListener('DOMContentLoaded', function () {
    // Sample user data
    const users = [
        {
            name: "Jane Doe",
            email: "jane.doe@example.com",
            courses: [
                "The Complete C++ Developer Course",
                "JavaScript Essentials",
                "Python for Beginners"
            ]
        },
        {
            name: "John Smith",
            email: "john.smith@example.com",
            courses: [
                "AWS for Beginners",
                "React for Beginners",
                "MongoDB for Beginners"
            ]
        },
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            courses: [
                "Java for Beginners",
                "R for Beginners",
                "The Complete C++ Developer Course"
            ]
        },
        {
            name: "Bob Brown",
            email: "bob.brown@example.com",
            courses: [
                "JavaScript Essentials",
                "Python for Beginners",
                "AWS for Beginners"
            ]
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            courses: [
                "React for Beginners",
                "JavaScript Essentials",
                "MongoDB for Beginners"
            ]
        },
        {
            name: "Michael Wilson",
            email: "michael.wilson@example.com",
            courses: [
                "The Complete C++ Developer Course",
                "Java for Beginners",
                "R for Beginners"
            ]
        }
    ];

    
    const userEmail = "jane.doe@example.com";
    const user = users.find(u => u.email === userEmail);

    if (user) {
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;

        const courseList = document.getElementById('courseList');
        courseList.innerHTML = user.courses.map(course => `<li>${course}</li>`).join('');
    } else {
        document.querySelector('.card-body').innerHTML = '<p>User not found.</p>';
    }
});
