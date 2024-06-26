"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractProperty = extractProperty;
var course = {
    title: "Typescript",
    subtitle: "learn scripting language",
    lessonsCount: 35
};
function extractProperty(data, property) {
    return data[property];
}
var val = extractProperty(course, "title");
console.log(val);
