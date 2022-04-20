//basic types
let myTypeString: string = 'Joshua'
let myTypeNumber: number = 33
let myTypeBoolean: boolean = true

// Array

let arrNumber: number[] = [1, 2, 3]
//let arrNumber2: Array<number> = [1, 2, 3]
let arrStrings: string[] = ['Uno', 'dos', 'tres']

let arrAny: any[] = ['Hola', 33, false]

//Tuple
let tuplePlayers: [string, number, boolean] = ['Messi', 10, true]

//TuoleArray

let players: [number, string][]

players = [
  [1, 'Messi'],
  [2, 'Leonardo'],
  [3, 'Ronaldo']
]

// Inferencia de Tipos

let myVariable;

let myVariable1: string;

let myVariable2 = true


// Unios

let myVariable3: string | number | null;

