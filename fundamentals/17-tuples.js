var courseRecord = ["Java", "Javafx programming", 35];
console.log(courseRecord);
function createCourse(title, subtitle, lessonsCount) {
    return [title, subtitle, lessonsCount];
}
console.log("The new course: " + createCourse("Python", "Django dev", 10));
