"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealClass = SealClass;
function SealClass(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
