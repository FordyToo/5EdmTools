function randomIndex(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
};

function getScroll(lvl) {
     let scroll = randomIndex(lvl);
     return 'Scroll of ' + scroll;   
}

var cantrip = [
    'Acid Splash', 'Blade Ward', 'Chill Touch', 'Control Flames', 'Create Bonfire', 'Dancing Lights', 'Druidcraft', 'Eldrirch Blast', 'Fire Bolt', 'Friends', 'Frostbite', 'Guidance', 'Gust', 'Light', 'Mage Hand', 'Magic Stone', 'Mending', 'Message', 'Minor Illusion', 'Mold Earth', 'Poison Spray', 'Prestidigitation', 'Produce Flame', 'Ray of Frost', 'Resistance', 'Sacred Flame', 'Shape Water', 'Shillelagh', 'Shocking Grasp', 'Spare the Dying', 'Thaumaturgy', 'Thorn Whip', 'Thunderclap', 'True Strike', 'Vicious Mockery'
];

var first = [
    'Absorb Elements', 'Alarm', 'Animal Friendship', 'Armor of Agathys', 'Arms of Hadar', 'Bane', 'Beast Bond', 'Bless', 'Burning Hands', 'Catapult', 'Charm Person'    
];
