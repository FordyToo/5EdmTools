function roll(n) {
    let result = Math.floor(Math.random() * n + 1);
    return result;
}

function generateStat() {
    var rolls = [];
    for (let i=0; i<4; i++) {
        rolls.push(roll(6));
    };
    rolls.sort().shift();
    var x = 0;
    for (let j=0; j<3; j++) {
        x += rolls[j];
    }; 
    return x;
}
