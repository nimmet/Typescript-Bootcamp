"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
var someData = {
    title: "Typescript",
    subtitle: "learn scripting language",
    lessonsCount: 35
};
var moreData = {
    seqNo: 10,
    price: 100
};
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var merged = merge(someData, moreData);
console.log(merged);
