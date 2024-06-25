function createCourse(title, subtitle, lessonsCount) {
    console.log("Creating course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, ",\n     lessons Count: ").concat(lessonsCount));
    return {
        title: title,
        subtitle: subtitle,
        lessonsCount: lessonsCount
    };
}
var course = createCourse("Java", "Spring MVC", 45);
console.log(course);
