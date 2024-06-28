
import * as dotenv from "dotenv";
const result = dotenv.config();
if(result.error){
    console.log(`Error loading environment variables, aboirting.`);
    process.exit(1);
}



import * as express from 'express';
import {root} from "./routes/root";
import {isInteger} from "./routes/utils";
import {logger} from "./logger";


const app = express();

function setupExpress() {


    app.route("/").get(root);

}


function startServer(){
    let port:number;
    const portEnv = process.env.PORT;

    const portArg = process.argv[2];

    if (isInteger(portEnv)){
        port = parseInt(portEnv);
    }

    if (!port && isInteger(portArg)){
        port = parseInt(portArg);
    }

    if (isInteger(portArg)){
        port = parseInt(portArg);
    }

    if (!port){
        port = 9000;
    }
    app.listen(9000, ()=>{
        logger.info(`Http REST API Server is running at http://localhost:9000`);
    })

}

setupExpress();
startServer();