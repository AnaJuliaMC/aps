 
//customer.ts
export default class Customer {
    name: string = "";
    age: number = 0;
    email: string = "";
    birthDate: Date = new Date();

    constructor(name: string){
        this.name = name
    }

    isAdult(){
        return this.age <= 18
    }
}
 