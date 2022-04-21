"use strict";
//Generics
// type dataType = Person | Product;
class DataColection {
    constructor() {
        this.items = [];
        // getNames(): string[] {
        //   return this.items.map((item) => item.name)
        // }
        // getItemByID(id: number): T | undefined {
        //   return this.items.find((item:T) => item.id === id)
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
}
const productCollection = new DataColection();
const newData2 = {
    id: 2,
    name: 'Monster',
    price: 100
};
productCollection.addItem(newData2);
productCollection.getItems();
