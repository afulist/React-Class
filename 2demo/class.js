// function Person(name) {
//     this.name = name;
// }
// Person.prototype.describe = function () {
//     return 'Person called '+this.name;
// };

class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+this.name;
    }
}

var Anna = new Person('Anna');

console.log(Anna.describe());