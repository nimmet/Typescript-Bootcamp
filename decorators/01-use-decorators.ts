

// @DatabaseService()
import {Log, LoggingLevel, Perf} from "./02-method-decorators";
import {SealClass} from "./03-class-decorator";

@SealClass()
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

Object.defineProperty(DbService,"sayHello",{
    value: () =>{
        console.log("Hello World");
    }
})