var tavernArrFirst = [
    "The Silver ",
    "The Golden ",
    "The Staggering ",
    "The Laughing ",
    "The Prancing ",
    "The Guilded ",
    "The Running ",
    "The Howling ",
    "The Slaughtered ",
    "The Leering ",
    "The Drunken ",
    "The Leaping ",
    "The Roaring ",
    "The Frowning ",
    "The Lonely ",
    "The Wandering ",
    "The Mysterious ",
    "The Barking ",
    "The Black ",
    "The Gleaming "
];

var tavernArrLast = [
    "Eel",
    "Dolphin",
    "Dwarf",
    "Pegasus",
    "Pony",
    "Rose",
    "Stag",
    "Wolf",
    "Lamb",
    "Demon",
    "Goat",
    "Spirit",
    "Horde",
    "Jester",
    "Mountain",
    "Eagle",
    "Satyr",
    "Dog",
    "Spider",
    "Star"    
];

function getTavern() {
    var tavernName = tavernArrFirst[Math.floor(Math.random() * tavernArrFirst.length)] + 
        tavernArrLast[Math.floor(Math.random() * tavernArrLast.length)];
    return tavernName;
}
