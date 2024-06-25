import {MAX_PAGE} from "./09-modules-exports";

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

export const PAGESIZE = 100;

const max_page = MAX_PAGE;