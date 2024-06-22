
let course = {
    title: "Java Spring MVC",
    student:null
}

console.log(course?.title, course?.student ?? "Uyghur")

function logCourseTitle(course){
    if (course?.title){
        console.log(`The title is: ${course.title}`)
    }
}