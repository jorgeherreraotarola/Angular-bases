function addNunbers(a:number,b:number){
    return a+b
}
const addNumberArrow = (a:number,b:number):string => `${a+b}`
const multiply = (firstNumber:number,SecondNumber?:number,base:number=2) => firstNumber*base
// const result:number = addNunbers(1,2)
// const resultArrow:string = addNumberArrow(3,5)
// const multiplyResult:number = multiply(5)
// console.log({result,resultArrow,multiplyResult})
interface Character {
    name: string;
    hp:number;
    ShowHp: () => void;
}


const healCharacter = (character:Character,amount:number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    ShowHp () {console.log(`Puntos de vida ${this.hp}`)}
}

strider.ShowHp();
healCharacter(strider,40);
strider.ShowHp();
export{}