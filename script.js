const courses = [
  { id: 1, name: "CHM 101", description: "Introduction to Chemistry.", completed: false },
  { id: 2, name: "MTH 101", description: "Basic Mathematics concepts.", completed: false },
  { id: 3, name: "PHY 101", description: "Introduction to Physics.", completed: false }
];

// Display course list
const list = document.getElementById('course-list');
function renderCourseList() {
  list.innerHTML = '';
  courses.forEach(course => {
    const item = document.createElement('li');
    item.textContent = course.name;
    if (course.completed) item.classList.add('completed');
    item.onclick = () => showCourseDetails(course.id);
    list.appendChild(item);
  });
}

// Show course details
const details = document.getElementById('course-details');
function showCourseDetails(courseId) {
  const course = courses.find(c => c.id === courseId);
  details.innerHTML = `
    <h2>${course.name}</h2>
    <p>${course.description}</p>
    <button onclick="markAsCompleted(${courseId})" ${course.completed ? 'disabled' : ''}>
      ${course.completed ? "Completed" : "Mark as Completed"}
    </button>
  `;
}

// Mark a course as completed
function markAsCompleted(courseId) {
  const course = courses.find(c => c.id === courseId);
  course.completed = true;
  renderCourseList();
  showCourseDetails(courseId);
}

// Initial render
renderCourseList();