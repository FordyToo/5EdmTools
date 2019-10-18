var dwarfMale = [
    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
];

var dwarfFem = [
    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
];

var dwarfClan = [
    " Balderk", " Battlehammer", " Brawnanvil", " Dankil", " Fireforge", " Frostbeard", " Gorunn", " Holderhek", " Ironfist", " Loderr", " Lutgehr", " Rumnaheim", " Strakeln", " Torunn", " Ungart"
];

var elfMale = [
    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
];

var elfFem = [
    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirasta", "Thia", "Vadania", "Valanthe", "Xanaphia"
];

var elfFamily = [
    " Amakiir", " Amastacia", " Galanodel", " Holimion", " Ilphelkiir", " Liadon", " Meliamne", " Na&iuml;lo", " Siannodel", " Xiloscient"
];

var halfMale = [
    "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"
];

var halfFem = [
    "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"
];

var halfFamily = [
    " Brushgather", " Goodbarrel", " Greenbottle", " High-hill", " Hilltopple", " Leagallow", " Tealeaf", " Thorngage", " Tosscobble", " Underbough"
];

var hOrcMale = [
    "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thonk"
];

var hOrcFem = [
    "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"
];

var dBMale = [
    "Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadar", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"
];

var dBFem = [
    "Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"
];

var dBNick = [
    " Climber", " Earbender", " Leaper", " Pious", " Shieldbiter", " Zealous"
];

var dBClan = [
    " Clethtinthiallor", " Daardendrian", " Delmirev", " Drachedandion", " Fenkenkabradon", " Kepeshkmolik", " Kerrhylon", " Kimbatuul", " Linxakasendalor", " Myastan", " Nemmonis", " Norixius", " Ophinshtalajiir", " Prexijandilin", " Shestendeliath", " Turnuroth", " Verthisathurgiesh", " Yarjerit"
];


function randomIndex(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
};

function getDwarfMale() {
    let dwarfMaleName = randomIndex(dwarfMale) + randomIndex(dwarfClan);
    return dwarfMaleName;
};

function getDwarfFem() {
    let dwarfFemName = randomIndex(dwarfFem) + randomIndex(dwarfClan);
    return dwarfFemName;
};

function getElfMale() {
    let elfMaleName = randomIndex(elfMale) + randomIndex(elfFamily);
    return elfMaleName;
};

function getElfFem() {
    let elfFemName = randomIndex(elfFem) + randomIndex(elfFamily);
    return elfFemName;
};

function getHalfMale() {
    let halfMaleName = randomIndex(halfMale) + randomIndex(halfFamily);
    return halfMaleName;
};

function getHalfFem() {
    let halfFemName = randomIndex(halfFem) + randomIndex(halfFamily);
    return halfFemName;
};

function getHOrcMale() {
    let hOrcMaleName = randomIndex(hOrcMale);
    return hOrcMaleName;
};

function getHOrcFem() {
    let hOrcFemName = randomIndex(hOrcFem);
    return hOrcFemName;
};

function getDBMale() {
    let dBMaleName = randomIndex(dBMale) + randomIndex(dBNick) + randomIndex(dBClan);
    return dBMaleName;
};

function getDBFem() {
    let dBFemName = randomIndex(dBFem) + randomIndex(dBNick) + randomIndex(dBClan);
    return dBFemName;
};
