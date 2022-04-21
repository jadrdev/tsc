"use strict";
//Class
class Person {
    constructor() {
        this.zone = 'Canarias';
        this.city = 'Tenerife';
        this.country = 'La gomera';
    }
    greet() {
        console.log('Hello');
    }
}
class Employee extends Person {
    //Atributos
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    //Métodos
    showInfo() {
        console.log(`${this.name} ${this.dept} ${this.zone} ${this.city}`);
    }
}
const emp = new Employee(1, 'Joshua', 'Sales');
