
interface Course {
    title: string;
    lessonsCount:number;
}

const course1:Course = {
    title:"Java Spring MVC",
    lessonsCount:5,
}

const course2:Course = {
    title:"TypeScript Bootcamp",
    lessonsCount:50,
}

function printCourse(message:string, ...courses:Course[]){
    console.log(message);
    for (let course of courses){
        console.log(course);
    }
}

printCourse("Welcome to Java course",course1,course2);