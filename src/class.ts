//Class

class Person {

  public zone = 'Canarias'
  protected city = 'Tenerife'
  private country = 'La gomera'

  constructor() { }
  
  greet(): void{
    console.log('Hello');
  }
}

class Employee extends Person {
  //Atributos
  constructor(private readonly id: number, private readonly name: string, private readonly dept: string) {
    super();
    this.showInfo();
  }
  
    //Métodos
  
  showInfo(): void{
    console.log(`${this.name} ${this.dept} ${this.zone} ${this.city}`)
  }

}

const emp = new Employee(1, 'Joshua', 'Sales')
