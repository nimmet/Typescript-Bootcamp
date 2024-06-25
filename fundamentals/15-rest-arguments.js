var course1 = {
    title: "Java Spring MVC",
    lessonsCount: 5,
};
var course2 = {
    title: "TypeScript Bootcamp",
    lessonsCount: 50,
};
function printCourse(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course);
    }
}
printCourse("Welcome to Java course", course1, course2);
