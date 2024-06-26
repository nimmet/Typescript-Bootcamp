var numbers = new Array();
numbers.push(10);
numbers.push(90);
var promise = new Promise(function (resolve, reject) {
    resolve("Hello World!");
});
promise.then(function (value) {
});
