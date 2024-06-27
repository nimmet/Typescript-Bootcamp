

// @DatabaseService()
import {Log, LoggingLevel, Perf} from "./02-method-decorators";
import {SealClass} from "./03-class-decorator";
import {DatabaseId} from "./04-property-decorators";

@SealClass
class DbService {

    showData(){

    }

    @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data:any){
        console.log(`Saving data in the database...`);
}
}

const db = new DbService();
db.saveData({hello:"world"});

// Object.defineProperty(DbService,"sayHello",{
//     value: function (){
//         console.log("Hello World");
//     }
// });


class Course {

    @DatabaseId()
    id:string;
    title:string;

    constructor(title:string){
        this.title = title;
    }

    print(message:string){
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }
}

const course1 = new Course("Javascript");
console.log(`Course 1 id: `,course1.id);

const course2 = new Course("Django");
console.log(`Course 2 id: `,course2.id);
