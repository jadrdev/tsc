//vaiables

const PI = 3.14

//Interfaces
interface Person {
  id: number;
  name: string;
}
 
// funtion
function generateRandomNumber(): number {
  return Math.floor(Math.random()*100)
}

export {PI, Person, generateRandomNumber}