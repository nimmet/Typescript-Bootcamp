const someData = {
    title: "Typescript",
    subtitle: "learn scripting language",
    lessonsCount:35
}


const moreData = {
    seqNo:10,
    price:100
}

export function merge<T,U>(obj1:T, obj2:U){
    return Object.assign(obj1,obj2) as (T&U);
}

const merged = merge(someData,moreData);

console.log(merged)