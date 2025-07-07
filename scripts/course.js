const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, category: "WDD" },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false, category: "CSE" },
  { code: "WDD 231", name: "Frontend Development", credits: 2, completed: false, category: "WDD" }
];

let filteredCourses = courses;

function renderCourses() {
  const container = document.getElementById('courseList');
  container.innerHTML = '';
  let totalCredits = 0;

  filteredCourses.forEach(course => {
    const div = document.createElement('div');
    div.classList.add('course');
    if (course.completed) div.classList.add('completed');
    div.textContent = `${course.code} - ${course.name}`;
    container.appendChild(div);
    totalCredits += course.credits;
  });

  document.getElementById('totalCredits').textContent = `The total credits for courses listed above is ${totalCredits}`;
}

document.getElementById('allBtn').addEventListener('click', () => {
  filteredCourses = courses;
  renderCourses();
});

document.getElementById('cseBtn').addEventListener('click', () => {
  filteredCourses = courses.filter(c => c.category === "CSE");
  renderCourses();
});

document.getElementById('wddBtn').addEventListener('click', () => {
  filteredCourses = courses.filter(c => c.category === "WDD");
  renderCourses();
});

document.addEventListener('DOMContentLoaded', renderCourses);
