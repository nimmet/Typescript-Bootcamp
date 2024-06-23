var course = {
    title: "TypeScript Bootcamp",
    subtitle: "Make project",
    lessonsCount: 45
};
printCourse(course);
function printCourse(course) {
    var title = course.title, subtitle = course.subtitle, lessonsCount = course.lessonsCount;
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessons Count: ").concat(lessonsCount));
}
