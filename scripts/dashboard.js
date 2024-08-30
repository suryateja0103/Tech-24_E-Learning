document.addEventListener('DOMContentLoaded', function () {
    // Sample data
    const dashboardData = {
        totalCourses: 8,
        enrolledStudents: 1500,
        activeInstructors: 8
    };

    // Update the dashboard with sample data
    document.getElementById('totalCourses').textContent = dashboardData.totalCourses;
    document.getElementById('enrolledStudents').textContent = dashboardData.enrolledStudents;
    document.getElementById('activeInstructors').textContent = dashboardData.activeInstructors;
});
