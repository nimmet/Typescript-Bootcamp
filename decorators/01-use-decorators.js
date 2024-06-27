"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @SealClass()
// @DatabaseService()
var _02_method_decorators_1 = require("./02-method-decorators");
var DbService = /** @class */ (function () {
    function DbService() {
    }
    DbService.prototype.showData = function () {
    };
    // @perf()
    DbService.prototype.saveData = function (data) {
        console.log("Saving data in the database...");
    };
    __decorate([
        (0, _02_method_decorators_1.Log)(_02_method_decorators_1.LoggingLevel.DEBUG)
    ], DbService.prototype, "saveData", null);
    return DbService;
}());
var db = new DbService();
db.saveData({ hello: "world" });
