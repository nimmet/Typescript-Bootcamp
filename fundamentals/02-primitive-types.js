var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total = ", total);
var title = "TypeScript Bootcamp";
var subTitle = "Learn fundamentals of typescript";
var fullTitle = title + " " + subTitle;
var ft = "Full title: ".concat(title, ": ").concat(subTitle);
console.log("Full title: " + fullTitle);
console.log(ft);
// primitive type: object
var course = {
    title: "Spring mvc",
    subtitle: "Learn fundamentals of typescript",
    lessonsCount: 10,
    author: {
        firstName: "James",
        lastName: "Bond",
    }
};
console.log(course.title);
var courseJava = {
    title: "Spring mvc"
};
if (courseJava === null || courseJava === void 0 ? void 0 : courseJava.title) {
    console.log("The title is: ".concat(courseJava.title));
}
