import {Course} from "./02-interfaces";

const course:Course = {
    title: "Typescript",
    subtitle: "learn scripting language",
    lessonsCount:35
}

type CourseKeys = keyof Course;

export function extractProperty<T, K extends keyof T>(data:T, property:K){

    return data[property];
}

const val = extractProperty(course,"title");

console.log(val);