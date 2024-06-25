class Course {
    titlee: string;
    subtitle: string;
    creationDt:Date;

    constructor(
        title: string,
        subtitle: string,
        creationDt:Date
    ) {
        this.titlee = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }

    age(){
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs/1000/60/60/24/365);
    }

    get title(){
        return this.titlee;
    }

    set title(title:string){
        this.titlee = title;
    }
}

const course = new Course("Java","spring  boot",new Date(1990,1,1));
console.log(`The course: ${course} and the age of the student: ${course.age()}`);
course.title ="Python";
console.log(`The course: ${course} and the age of the student: ${course.age()}`);