
interface Course {
    title: string;
    subtitle: string;
    lessonsCount:number;
}


export function freezeCourse(course:Course):Readonly<Course>    {
   return  Object.freeze(course);
}


const frozen  = freeze({
    title:"Script programming",
    subtitle:"javascript",
    lessonsCount:20
});

interface Lesson {
    title:string;
    seqNo:number;
}

function freezeLesson(lesson:Lesson):Readonly<Lesson> {
    return Object.freeze(lesson)
}

function freeze<T> (input:T):Readonly<T> {
    return Object.freeze(input);
}


