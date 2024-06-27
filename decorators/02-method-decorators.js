"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingLevel = void 0;
exports.Log = Log;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["INFO"] = 0] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 1] = "WARN";
    LoggingLevel[LoggingLevel["ERROR"] = 2] = "ERROR";
    LoggingLevel[LoggingLevel["DEBUG"] = 3] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 4] = "TRACE";
})(LoggingLevel || (exports.LoggingLevel = LoggingLevel = {}));
var appMaxLoggingLevel = LoggingLevel.DEBUG;
function Log(level) {
    console.log("Applying @Log Decorator");
    return function (target, propertyKey, descriptor) {
        // console.log(`target:${target} \n propertyKey:${propertyKey}\n descriptor:${descriptor}`);
        var originalFunction = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= appMaxLoggingLevel) {
                console.log(">> Log: ".concat(propertyKey, ", ").concat(JSON.stringify(args)));
            }
            originalFunction.apply(this, args);
        };
    };
}
