let a = {name: '你好'}

class Teacher {
    constructor() {
        this.name = 'jake'
    }
    getfef(){

    }
}
let teacher = new Teacher()
console.log(typeof teacher)
console.log(teacher)

function functionDecorator(target, key, descriptor) {
    console.log(typeof target)
    console.log(target)
    descriptor.value = () => {
        return 'jake';
    }
    return descriptor;
}

class Person {
    constructor() {
        this.name = 'jake'
    }
    @functionDecorator
    getName() {
        return this.name;
    }
}

let person = new Person();
console.log(person.getName())
