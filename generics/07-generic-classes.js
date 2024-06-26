var KeyValue = /** @class */ (function () {
    function KeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValue.prototype.print = function () {
        console.log("Key = ".concat(this.key, " Value = ").concat(this.value));
    };
    return KeyValue;
}());
var p1 = new KeyValue("1", 40);
console.log(p1.print());
