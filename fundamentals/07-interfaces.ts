
interface Course {
    readonly title: string;
    subtitle: string;
    lessonsCount?:number; // ? means optional
}

const javaCourse: Course = {
    title: "Java",
    subtitle: "Learn fundamentals of java",
    lessonsCount:50,
}