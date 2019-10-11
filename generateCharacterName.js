var dwarfMale = [
    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
];

var dwarfFemale = [
    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
];

var dwarfClan = [
    " Balderk", " Battlehammer", " Brawnanvil", " Dankil", " Fireforge", " Frostbeard", " Gorunn", " Holderhek", " Ironfist", " Loderr", " Lutgehr", " Rumnaheim", " Strakeln", " Torunn", " Ungart"
];

var elfMale = [
    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
];

var elfFemale = [
    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirasta", "Thia", "Vadania", "Valanthe", "Xanaphia"
];

var elfFamily = [
    " Amakiir", " Amastacia", " Galanodel", " Holimion", " Ilphelkiir", " Liadon", " Meliamne", " Na&iuml;lo", " Siannodel", " Xiloscient"
];

var halflingMale = [
    "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"
];

var halflingFemale = [
    "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"
];

var halflingFamily = [
    " Brushgather", " Goodbarrel", " Greenbottle", " High-hill", " Hilltopple", " Leagallow", " Tealeaf", " Thorngage", " Tosscobble", " Underbough"
];

var halfOrcMale = [
    "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thonk"
];

var halfOrcFemale = [
    "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"
];

var dragonbornMale = [
    "Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadar", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"
];

var dragonbornFemale = [
    "Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"
];

var dragonbornNickname = [
    " Climber", " Earbender", " Leaper", " Pious", " Shieldbiter", " Zealous"
];

var dragonbornClan = [
    " Clethtinthiallor", " Daardendrian", " Delmirev", " Drachedandion", " Fenkenkabradon", " Kepeshkmolik", " Kerrhylon", " Kimbatuul", " Linxakasendalor", " Myastan", " Nemmonis", " Norixius", " Ophinshtalajiir", " Prexijandilin", " Shestendeliath", " Turnuroth", " Verthisathurgiesh", " Yarjerit"
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

function getElfMaleName() {
    let x = Math.floor(Math.random() * elfMale.length);
    let y = Math.floor(Math.random() * elfFamily.length);
    let elfMaleName = "";
    elfMaleName = elfMale[x] + elfFamily[y];
    return elfMaleName;
};

function getElfFemaleName() {
    let x = Math.floor(Math.random() * elfFemale.length);
    let y = Math.floor(Math.random() * elfFamily.length);
    let elfFemaleName = "";
    elfFemaleName = elfFemale[x] + elfFamily[y];
    return elfFemaleName;
};

function getHalflingMaleName() {
    let x = Math.floor(Math.random() * halflingMale.length);
    let y = Math.floor(Math.random() * halflingFamily.length);
    let halflingMaleName = "";
    halflingMaleName = halflingMale[x] + halflingFamily[y];
    return halflingMaleName;
};

function getHalflingFemaleName() {
    let x = Math.floor(Math.random() * halflingFemale.length);
    let y = Math.floor(Math.random() * halflingFamily.length);
    let halflingFemaleName = "";
    halflingFemaleName = halflingFemale[x] + halflingFamily[y];
    return halflingFemaleName;
};

function getHalfOrcMaleName() {
    let halfOrcMaleName = halfOrcMale[Math.floor(Math.random() * halfOrcMale.length)];
    return halfOrcMaleName;
};

function getHalfOrcFemaleName() {
    let halfOrcFemaleName = halfOrcFemale[Math.floor(Math.random() * halfOrcFemale.length)];
    return halfOrcFemaleName;
};

function getDragonbornMaleName() {
    let dragonbornMaleName = dragonbornMale[Math.floor(Math.random() * dragonbornMale.length)] + dragonbornNickname[Math.floor(Math.random() * dragonbornNickname.length)] + dragonbornClan[Math.floor(Math.random() * dragonbornClan.length)];
    return dragonbornMaleName;
};

function getDragonbornFemaleName() {
    let dragonbornFemaleName = dragonbornFemale[Math.floor(Math.random() * dragonbornFemale.length)] + dragonbornNickname[Math.floor(Math.random() * dragonbornNickname.length)] + dragonbornClan[Math.floor(Math.random() * dragonbornClan.length)];
    return dragonbornFemaleName;
};
