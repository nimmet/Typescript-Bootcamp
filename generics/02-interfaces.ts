
export interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

export interface CourseUpdate {
    title?:string;
    subtitle?:string;
    lessonsCount?:number;
}

export function updateCourses(courseId:string, update:Partial<Course>) {

}

updateCourses("1",{
    title:"Java EE"
})

updateCourses("2",{
    title:"Python",
    subtitle:"Django web"})

