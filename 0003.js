////////////////////////////////////////////////////////////////////////////////
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";
var myName = "Eric";
var hits = [];
for(var i = 0; i < text.length; i++) {
    if(text[i] === "E") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}
if(hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
/////////////////////////////////////////////////////////////////////////////
var text = "Hello I am Sunakshi. \
Sunakshi is an Indian name. Sunakshi is not a very common name.";
var myName = "Sunakshi";
var hits = [];
for(var i = 0; i < text.length; i++) {
    if(text[i] === "S") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}
if(hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
////////////////////////////////////////////////////////////////////////
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying) {
    if(youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            console.log("You did it! You slew the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("The dragon burninates you! You're toast.");
        slaying = false;
    }
}
/////////////////////////////////////////////////////////////////////////
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5);
var totalDamage = 0;
while(slaying) {
    if(youHit === 1) {
        console.log("You hit the dragon " + youHit + " yH");
        var totalDamage = totalDamage + damageThisRound;
        if(totalDamage >= 4) {
            console.log("You slew the dragon " + totalDamage + " tD");
            var slaying = false;
        } else {
            console.log("ANOTHER ROUND");
            var youHit = Math.floor(Math.random() * 2);
            console.log("Hit 2nd rnd " + youHit + " yH");
            var totalDamage = totalDamage + damageThisRound;
            console.log(totalDamage + " tD");
            if(totalDamage >= 4) {
                console.log("WIN");
            } else {
                console.log("LOOSE");
            }
            var slaying = false;
        }
    } else {
        console.log("Dragon defeat you -" + youHit + " yH");
    }
    var slaying = false;
};
console.log("END");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();
switch(troll) {
    case 'FIGHT':
        var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
        var smart = prompt("Are you smart?").toUpperCase();
        if(strong === 'YES' || smart === 'YES') {
            console.log("You only need one of the two! You beat the troll--nice work!");
        } else {
            console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
        }
        break;
    case 'PAY':
        var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
        var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
        if(money === 'YES' && dollars === 'YES') {
            console.log("Great! You pay the troll and continue on your merry way.");
        } else {
            console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
        }
        break;
    case 'RUN':
        var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
        var headStart = prompt("Did you get a head start?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
            console.log("You got away--barely! You live to stroll through the forest another day.");
        } else {
            console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
        }
        break;
    default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
var user = prompt("Where did you born?", "").toUpperCase();
switch(user) {
    case "PETERSBURG":
        console.log("You are Peterburzshets");
        break;
    case "MOSCOW":
        console.log("Your are Moscowitch");
        break;
    case "YAKUTSK":
        console.log("Your are Yakut");
        break;
    case "OMSK":
        console.log("Your are Omichanin");
        break;
    case "LONDON":
        console.log("Your are Londonchanin");
        break;
    default:
        console.log("You are bomzsh");
};
///////////////////////////////////////////////////////////////////////
var user = prompt("Where did you born?", "").toUpperCase();
switch(user) {
    case "SAINT-PETERSBURG":
        console.log("You are Peterburzshets");
        var pop = prompt("Skolko narodu v Pitere?", "");
        if(pop == 5000000 || "5 mln") {
            console.log("pravilno - PETER forever...");
        } else {
            console.log("NU KAK TAK?!");
        }
        break;
    case "MOSCOW":
        console.log("Your are Moscowitch");
        var pop = prompt("Skolko narodu v Moskve?", "");
        var capital = prompt("Moskva - eto stolitza Rossii ?", "da / net").toUpperCase;
        if(pop == 10000000 && "da") {
            console.log("pravilno - stolitsa vsiako...");
        } else {
            console.log("NET - 10 000 000");
        }
        break;
    case "OMSK":
        console.log("Your are Omichanin");
        var pop = prompt("Skolko narodu v Omske?", "");
        if(pop == 1000000 || "1 mln") {
            console.log("pravilno - OoO...");
        } else {
            console.log("NET -  1 000 000");
        }
        break;
    default:
        console.log("You are bomzsh");
        var pop = prompt("korobka ili podval?", "korobka  podval").toUpperCase();
        if(pop == "korobka".toUpperCase() || "podval".toUpperCase()) {
            console.log("a gde zshe esche ?! ...");
        } else {
            console.log("Mmmmmm ?!");
        }
};
//////////////////////////////////////////////////////////////////
var x1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var x2 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
var newArray = [x1, x2, x1];
console.log(newArray);
/////////////////////////////////////////////////////////////////
var x1 = [
    [8, 5, 1],
    [6, 4]
];
var x2 = [
    [3],
    [33],
    [35],
    [22]
];
var jagged = [x1, x2[1]];
console.log(jagged);
/////////////////////////////////////////////////////////////
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();
////////////////////////////////////////////////////////////////
var object1 = new Object();
object1["name"] = "Sergey";
object1.age = 27;
object1.height = "150cm";
console.log(object1);
var object2 = new Object();
object2["name"] = "Andrey";
object2.age = 26;
object2.height = "140cm";
console.log(object2);
var object3 = new Object();
object3["name"] = "Denis";
object3.age = 25;
object3.height = "130";
console.log(object3);
/////////////////////////////////////////////////////////
var simpleObject = {
    number: 2,
    bln: false,
    string: "bbb"
}
var myArray = [1, true, "aaa", simpleObject];
console.log(myArray);
/////////////////////////////////////////////////////
var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
};
var list = function(obj) {
    for(var prop in obj) {
        console.log(prop);
    }
};
var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};
list(friends);
search("Steve");
///////////////////////////////////////////////////////
var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
};
var list = function(obj) {
    for(var prop in obj) {
        console.log(prop);
    }
};
var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};
list(friends);
search("Steve");
//////////////////////////////////////////////////////////////
