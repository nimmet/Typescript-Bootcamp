function freezeCourse(course) {
    return Object.freeze(course);
}
var frozen = freezeCourse({
    title: "Script programming",
    subtitle: "javascript",
    lessonsCount: 20
});
