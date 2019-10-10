var dwarfMale = [
    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint",
    "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", 
    "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
];

var dwarfFemale = [
    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", 
    "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
];

var dwarfClan = [
    " Balderk", " Battlehammer", " Brawnanvil", " Dankil", " Fireforge", " Frostbeard", " Gorunn", " Holderhek", " Ironfist", 
    " Loderr", " Lutgehr", " Rumnaheim", " Strakeln", " Torunn", " Ungart"
];

function getDwarfMaleName() {
    let x = Math.floor(Math.random() * dwarfMale.length);
    let y = Math.floor(Math.random() * dwarfClan.length);
    let dwarfMaleName = "";
    dwarfMaleName = dwarfMale[x] + dwarfClan[y];
    return dwarfMaleName;
};

function getDwarfFemaleName() {
    let x = Math.floor(Math.random() * dwarfFemale.length);
    let y = Math.floor(Math.random() * dwarfClan.length);
    let dwarfFemaleName = "";
    dwarfFemaleName = dwarfFemale[x] + dwarfClan[y];
    return dwarfFemaleName;
};
