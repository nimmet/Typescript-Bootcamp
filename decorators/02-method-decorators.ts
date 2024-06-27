

export enum LoggingLevel {
    INFO,
    WARN,
    ERROR,
    DEBUG,
    TRACE
}


const appMaxLoggingLevel = LoggingLevel.DEBUG;

export function Log(level: LoggingLevel):MethodDecorator {

    console.log(`Applying @Log Decorator`);
    return(target:any, propertyKey:string, descriptor:PropertyDescriptor  ) => {
        // console.log(`target:${target} \n propertyKey:${propertyKey}\n descriptor:${descriptor}`);

        const originalFunction = descriptor.value;
        descriptor.value = function (...args )  {

            if (level <= appMaxLoggingLevel){

                console.log(`>> Log: ${propertyKey}, ${JSON.stringify(args)}`)
            }


            originalFunction.apply(this,args);
        }
    }
}

export function Perf():MethodDecorator {
    return (target:any, propertyKey:string, descriptor:PropertyDescriptor  ) => {
        const originalFunction:Function = descriptor.value;

        descriptor.value = function (...args:any[] )  {
            console.log(`started at ${new Date().getTime()}`)
            originalFunction.apply(this,args);
            console.log(`ended at ${new Date().getTime()}`);
        }
    }
}