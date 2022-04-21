// import {Person, generateRandomNumber } from './myModules'
// import { PI as MyPI } from './myModules'
import * as myCode  from './myModules'


console.log(myCode.MyPI);

const user: myCode.Person = {
  id: 1,
  name: 'Joshua'
}

console.log(user);

console.log(myCode.generateRandomNumber());