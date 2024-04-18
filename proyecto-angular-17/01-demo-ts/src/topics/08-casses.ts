// export class Person{
//     public name:string;
//     private address:string;

//     constructor(name:string,address:string){
//         this.name=name
//         this.address=address
//     }
// }
/* ------------------definicion de clase corta-----------------------*/
export class Person {
    constructor(
        public name: string,
        public lastName: string,
        private address: string = 'No Address'
    ) { };
}
// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName,'New York')
//     }
// }
export class Hero {
    // public person:Person;
    constructor(
        public alterEgo: string,
        public age:number,
        public realName:Person
    ){
        // this.person = new Person(realName)
    }
}
const person = new Person('Tony','Stark','New York')
const ironman = new Hero('ironman',45,person)
console.log(ironman)