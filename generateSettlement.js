function randomIndex(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
};

function getSettlement() {
    settlement.raceRelations = randomIndex(raceRelations);
    settlement.rulersStatus = randomIndex(rulersStatus);
    return settlement;
}

var settlement = {
    raceRelations:'',
    rulersStatus:'',
    notableTrait:'',
    knownFor:'',
    currentCalamity:''
};

var raceRelations = [
    'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'harmony', 'tension or rivalry', 'tension or rivalry', 'tension or rivalry', 'tension or rivalry', 'racial majority are conquerors', 'racial majority are conquerors', 'racial minority are rulers', 'racial minority are refugees', 'racial majority oppresses minority', 'racial minority oppresses majority'
];

var rulersStatus = [
    'respected, fair, and just', 'respected, fair, and just', 'respected, fair, and just', 'respected, fair, and just', 'respected, fair, and just', 'feared tyrant', 'feared tyrant', 'feared tyrant', 'weakling manipulated by others', 'illegitimate ruler, simmering civil war', 
    'ruled or controlled by a powerful monster', 'mysterious, anonymous cabal', 'contested leadership, open fighting', 'cabal seized power openly', 'doltish lout', 'on deathbed, claimants compete for power', 'iron-willed but respected', 'iron-willed but respected', 'religious leader', 'religious leader' 
];

console.log(getSettlement());
