import {PAGESIZE} from "./07-interfaces";

interface Course {
    title: string;
    subtitle: string;
    status: {
        lessonsCount:number;
    }
}

let course: Course ={
    title:"TypeScript Bootcamp",
        subtitle:"Make project",
        status: {
        lessonsCount:45
    }
};

const newCourse = {
    title: course.title,
    subtitle: course.subtitle,
    status: course.status.lessonsCount,
};

console.log(newCourse)

course.status.lessonsCount=109;

console.log(newCourse)

const shallowCourse = {...course};

console.log(shallowCourse)

course.status.lessonsCount=109;

console.log(shallowCourse)