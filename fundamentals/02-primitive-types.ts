
const lessonsCount = 10;
const total = lessonsCount+10;
console.log("total = ", total);

let title = "TypeScript Bootcamp";
let subTitle = "Learn fundamentals of typescript";

const fullTitle = title+" "+subTitle;
const ft = `Full title: ${title}: ${subTitle}`;

console.log("Full title: "+fullTitle);
console.log(ft);

// primitive type: object

const course = {
    title:"Spring mvc",
    subtitle:"Learn fundamentals of typescript",
    lessonsCount:10,
    author: {
        firstName: "James",
        lastName: "Bond",
    }
};

console.log(course.title);

let courseJava = {
    title:"Spring mvc"
}

if (courseJava?.title){
    console.log(`The title is: ${courseJava.title}`)
}
