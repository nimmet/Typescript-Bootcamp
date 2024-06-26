
const numbers = new Array<number>();

numbers.push(10);

numbers.push(90);

const promise = new Promise<string>((resolve, reject) => {

    resolve("Hello World!");
});

promise.then(value => {

})