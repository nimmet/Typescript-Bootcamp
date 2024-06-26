"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @DatabaseService()
var _02_method_decorators_1 = require("./02-method-decorators");
var _03_class_decorator_1 = require("./03-class-decorator");
var _04_property_decorators_1 = require("./04-property-decorators");
var DbService = /** @class */ (function () {
    function DbService() {
    }
    DbService.prototype.showData = function () {
    };
    DbService.prototype.saveData = function (data) {
        console.log("Saving data in the database...");
    };
    __decorate([
        (0, _02_method_decorators_1.Perf)(),
        (0, _02_method_decorators_1.Log)(_02_method_decorators_1.LoggingLevel.DEBUG)
    ], DbService.prototype, "saveData", null);
    DbService = __decorate([
        _03_class_decorator_1.SealClass
    ], DbService);
    return DbService;
}());
var db = new DbService();
db.saveData({ hello: "world" });
// Object.defineProperty(DbService,"sayHello",{
//     value: function (){
//         console.log("Hello World");
//     }
// });
var Course = /** @class */ (function () {
    function Course(title) {
        this.title = title;
    }
    Course.prototype.print = function (message) {
        console.log("".concat(message, ", Course ").concat(this.title, ", id ").concat(this.id));
    };
    __decorate([
        (0, _04_property_decorators_1.DatabaseId)()
    ], Course.prototype, "id", void 0);
    return Course;
}());
var course1 = new Course("Javascript");
console.log("Course 1 id: ", course1.id);
var course2 = new Course("Django");
console.log("Course 2 id: ", course2.id);
