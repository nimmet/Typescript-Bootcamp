var CourseType;
(function (CourseType) {
    CourseType["FREE"] = "FREE";
    CourseType["PREMIUM"] = "PREMIUM";
    CourseType["PRIVATE"] = "PRIVATE";
    CourseType["HIDDEN"] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "Java Spring MVC",
    type: CourseType.FREE
};
console.log(course);
