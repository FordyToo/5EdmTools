function randomIndex(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
};

function getSettlement() {
    settlement.raceRelations = randomIndex(raceRelations);
    settlement.rulersStatus = randomIndex(rulersStatus);
    settlement.notableTrait = randomIndex(notableTrait);
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

var notableTrait = [
    'canals in place of streets', 'massive statue or monument', 'grand temple', 'large fortress', 'verdant parks and orchards', 'river divides town', 'major trade center', 'headquarters of a powerful family or guild', 'population mostly wealthy', 'destitute, rundown', 'awful smell (tanneries, open sewers)', 'center of trade for one specific good', 'site of many battles', 'site of a mythic or magical event', 'important library or archive', 'worship of all gods banned', 'sinister reputation', 'notable library or academy', 'site of important tomb or graveyard', 'built atop ancient ruins'
]

console.log(getSettlement());
