
interface Course {
    title: string;
    subtitle: string;
    lessonsCount:number;

}

let course: Course ={
    title:"TypeScript Bootcamp",
    subtitle:"Make project",
    lessonsCount:45

};

printCourse(course);

function printCourse(course: Course) {
   // const {title, ...other} = course;
    const {title,subtitle,lessonsCount} = course;
    console.log(
        `Title: ${title}, Subtitle: ${subtitle}, lessons Count: ${lessonsCount}`
    )
}