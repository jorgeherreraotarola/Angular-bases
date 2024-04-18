export interface Passenger {
    name:string;
    children?:string[];

}

const passenger1 : Passenger={
    name: 'Fernando',
}
const passenger2: Passenger={
    name: "Fernando",
    children: ['Natalia','Elizabeth']
}

// passenger1.
const printChildren = ({name,children}:Passenger)=>{
    const howManyChildren = children?.length||0
    console.log(name,howManyChildren)
}
printChildren(passenger1)