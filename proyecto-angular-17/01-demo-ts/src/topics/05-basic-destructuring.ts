interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;
}
interface Details{
    author:string;
    year:number;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: 'Ed Sheeran',
        year:2015
    }
}

const {song:anotherSong,songDuration:duration,details} = audioPlayer
const {author,year} = details

const [goku,vegeta,picolo]:string[]=['Goku','Vegeta','Picolo']
console.log('personaje 1:',goku)
console.log('personaje 2:',vegeta)
console.log('personaje 3:',picolo)



// console.log('Song:',anotherSong)
// console.log('Duration:',duration)
// console.log('Author:',author)
// console.log('Year:',year)
export{}