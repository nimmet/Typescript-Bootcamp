

// @SealClass()
// @DatabaseService()
import {Log, LoggingLevel} from "./02-method-decorators";

class DbService {

    showData(){

    }

    // @perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data:any){
        console.log(`Saving data in the database...`);
}
}

const db = new DbService();
db.saveData({hello:"world"});