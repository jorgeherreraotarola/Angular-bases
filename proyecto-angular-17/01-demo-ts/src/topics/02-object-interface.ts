const skills: string[] = ['Bash','Counter','Healing']

interface Character {
    name:string,
    hp:number,
    skills:string[],
    Hometown?: string
}
const strider:Character = {
    name: 'Strider',
    hp:100,
    skills:['Bash','Counter']
}

strider.Hometown= 'Rivendell'
console.table(strider)
export{}