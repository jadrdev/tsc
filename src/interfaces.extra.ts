// //Interfaces
// interface Person {
//   id: number, 
//   name: string,
// }

// interface Employee extends Person {
//   dept: string,
// }

// interface Customer extends Person {
//   country: string,
// }

interface Animal {
  getDogs: () => void;
  getCats: () => void;
}
class Zoo implements Animal {
  name = 'Vaca'
  getCats(): void {
    ///
  };

  getDogs(): void {
    
  }
  

}