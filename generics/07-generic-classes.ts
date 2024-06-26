class KeyValue<K,V> {

    constructor(
        public readonly key: K,
        public readonly value: V,
    ) {

    }

    print(){
        console.log(`Key = ${this.key} Value = ${this.value}`);
    }
}

const p1 = new KeyValue("1",40);
console.log(p1.print())