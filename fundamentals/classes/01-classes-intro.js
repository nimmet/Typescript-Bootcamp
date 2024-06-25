var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDt) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 60 / 24 / 365);
    };
    return Course;
}());
var course = new Course("Java", "spring  boot", new Date(1990, 1, 1));
console.log("The course: ".concat(course, " and the age of the student: ").concat(course.age()));
