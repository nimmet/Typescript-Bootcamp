
interface Course {
    title: string;
    subtitle: string;
    lessonsCount:number;
}

// create function method 1
const createStudent = (first:string,last:string, studentnr:number) => {
    
}
// create function method 2
function createCourse(title: string, subtitle: string, lessonsCount:number):Course  {
    console.log(`Creating course with Title: ${title}, Subtitle: ${subtitle},
     lessons Count: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    };

}

const course = createCourse("Java","Spring MVC",45);
console.log(course)
