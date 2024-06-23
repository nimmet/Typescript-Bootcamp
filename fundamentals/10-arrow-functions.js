function saveCourse(course, callback) {
    setTimeout(function () {
        callback("success");
    }, 1000);
}
saveCourse({ title: "Java Spring" }, function () {
    console.log("Save successfull.");
});
