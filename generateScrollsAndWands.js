function randomIndex(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
};

function getScroll(lvl) {
     let scroll = randomIndex(lvl);
     return 'Scroll of ' + scroll;   
};

function getWand(lvl) {
    let wand = randomIndex(lvl);
    return 'Wand of ' + wand;
};

var cantrip = [
    'Acid Splash', 'Blade Ward', 'Chill Touch', 'Control Flames', 'Create Bonfire', 'Dancing Lights', 'Druidcraft', 'Eldrirch Blast', 'Fire Bolt', 'Friends', 'Frostbite', 'Guidance', 'Gust', 'Light', 'Mage Hand', 'Magic Stone', 'Mending', 'Message', 'Minor Illusion', 'Mold Earth', 'Poison Spray', 'Prestidigitation', 'Produce Flame', 'Ray of Frost', 'Resistance', 'Sacred Flame', 'Shape Water', 'Shillelagh', 'Shocking Grasp', 'Spare the Dying', 'Thaumaturgy', 'Thorn Whip', 'Thunderclap', 'True Strike', 'Vicious Mockery'
];

var first = [
    'Absorb Elements', 'Alarm', 'Animal Friendship', 'Armor of Agathys', 'Arms of Hadar', 'Bane', 'Beast Bond', 'Bless', 'Burning Hands', 'Catapult', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Command', 'Compelled Duel', 'Comprehend Languages', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Disguise Self', 'Dissonant Whispers', 'Divine Favor', 'Earth Tremor', 'Ensnaring Strike', 'Entangle', 'Expeditious Retreat', 'Faerie Fire', 'False Life', 'Feather Fall', 'Find Familiar', 'Fog Cloud', 'Goodberry', 'Grease', 'Guiding Bolt', 'Hail of Thorns', 'Healing Word', 'Hellish Rebuke', 'Heroism', 'Hex', "Hunter's Mark", 'Ice Knife', 'Identify', 'Illusory Script', 'Inflict Wounds', 'Jump', 'Longstrider', 'Mage Armor', 'Magic Missile', 'Protection From Evil and Good', 'Purify Food and Drink', 'Ray of Sickness', 'Sanctuary', 'Searing Smite', 'Shield', 'Shield of Faith', 'Silent Image', 'Sleep', 'Speak With Animals', "Tasha's Hideous Laughter", "Tenser's Floating Disk", 'Thunderous Smite', 'Thunderwave', 'Unseen Servant', 'Witch Bolt', 'Wrathful Smite'    
];

var second = [
    "Aganazzar's Scorcher", 'Aid', 'Alter Self', 'Animal Messenger', 'Arcane Lock', 'Augury', 'Barkskin', 'Beast Sense', 'Blindness/Deafness', 'Blur', 'Branding Smite', 'Calm Emotions', 'Cloud of Daggers', 'Continual Flame', 'Cordon of Arrows', 'Crown of Madness', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Dust Devil', 'Earthbind', 'Enhance Ability', 'Enlarge/Reduce', 'Enthrall', 'Find Steed', 'Find Traps', 'Flame Blade', 'Flaming Sphere', 'Gentle Repose', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Invisibility', 'Knock', 'Lesser Restoration', 'Levitate', 'Locate Animals or Plants', 'Locate Object', 'Magic Mouth', 'Magic Weapon', "Maximilian's Earthen Grasp", "Melf's Acid Arrow", 'Mirror Image', 'Misty Step', 'Moonbeam', "Nystul's Magic Aura", 'Pass Without Trace', 'Phantasmal Force', 'Prayer of Healing', 'Protection from Poison', 'Pyrotechnics', 'Ray of Enfeeblement', 'Rope Trick', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Silence', 'Skywrite', "Snilloc's Snowball Swarm", 'Spider Climb', 'Spike Growth', 'Spiritual Weapon', 'Suggestion', 'Warding Bond', 'Warding Wind', 'Web', 'Zone of Truth'
];

console.log(getScroll(second));
console.log(getWand(cantrip));
