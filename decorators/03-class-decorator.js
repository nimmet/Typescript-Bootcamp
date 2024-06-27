"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealClass = SealClass;
function SealClass() {
    return function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}
