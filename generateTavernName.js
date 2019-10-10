var tavernArrFirst = [
    "The Silver ",
    "The Golden ",
    "The Staggering ",
    "The Laughing ",
    "The Prancing "
];

var tavernArrLast = [
    "Eel",
    "Dolphin",
    "Dwarf",
    "Pegasus",
    "Pony"
];

function getTavern() {
    var x = Math.floor(Math.random() * tavernArrFirst.length);
    var y = Math.floor(Math.random() * tavernArrLast.length);
    var tavernName = "";
    tavernName = tavernArrFirst[x] + tavernArrLast[y];
    return tavernName;
}

console.log(getTavern());
