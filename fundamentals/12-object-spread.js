"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var course = {
    title: "TypeScript Bootcamp",
    subtitle: "Make project",
    status: {
        lessonsCount: 45
    }
};
var newCourse = {
    title: course.title,
    subtitle: course.subtitle,
    status: course.status.lessonsCount,
};
console.log(newCourse);
course.status.lessonsCount = 109;
console.log(newCourse);
var shallowCourse = __assign({}, course);
console.log(shallowCourse);
course.status.lessonsCount = 109;
console.log(shallowCourse);
