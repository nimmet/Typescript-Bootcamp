
interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

type CourseRecord =[string,string,number];

const courseRecord:CourseRecord = ["Java","Javafx programming",35];

console.log(courseRecord)

function createCourse(title:string,subtitle:string,lessonsCount:number):CourseRecord {
    return [title,subtitle,lessonsCount];
}

console.log(`The new course: `+createCourse("Python","Django dev",10));