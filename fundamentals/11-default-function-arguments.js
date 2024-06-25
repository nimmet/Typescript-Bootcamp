function printCourse(title, subtitle, lessons) {
    if (title === void 0) { title = "Java"; }
    console.log("Title: ".concat(title, ", subtitle: ").concat(subtitle, ", lessons: ").concat(lessons));
}
printCourse("Python", "Django web", 90);
