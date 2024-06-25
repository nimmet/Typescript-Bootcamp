var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var moreNum = __spreadArray(__spreadArray([], numbers, true), [10, 11, 12], false);
var a = numbers[0], b = numbers[1], c = numbers[2];
console.log(moreNum);
console.log("a: ".concat(a, " b: ").concat(b, ", c: ").concat(c));
