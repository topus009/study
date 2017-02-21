///////////////////////////////////////////////////////////////////////////////
var lunch = prompt("What do you want for lunch?", "Type your lunch choice here");
switch(lunch) {
    case 'sandwich':
        console.log("Sure thing! One sandwich, coming up.");
        break;
    case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
    case 'salad':
        console.log("Sounds good! How about a caesar salad?");
        break;
    case 'pie':
        console.log("Pie's not a meal!");
        break;
    default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
///////////////////////////////////////////////////////////////////////////////
var color = prompt("What's your favorite primary color?", "");
switch(color) {
    case 'red':
        console.log("Red's a good color!");
        break;
    case 'blue':
        console.log("That's my favorite color, too!");
        break;
    case "yellow":
        console.log("Oo thats yellow");
        break;
    default:
        console.log("I don't think that's a primary color!");
}
//////////////////////////////////////////////////////////////////////////////////
var candy = prompt("What's your favorite candy?", "Type your favorite candy here.");
switch(candy) {
    case 'licorice':
        console.log("Gross!");
        break;
    case 'gum':
        console.log("I like gum!");
        break;
    case 'beets':
        console.log("...is that even a candy?");
        break;
    default:
        console.log("aaaaa");
}
//////////////////////////////////////////////////////////////////////////////////
var answer = prompt("Tipe any number from 1 to 3", "NUMBER");
switch(answer) {
    case '1':
        console.log("Your number is " + answer);
        break;
    case '2':
        console.log("Your number is " + answer);
        break;
    case '3':
        console.log("Your number is " + answer);
        break;
    default:
        console.log("I said FROM 1 to 5 !!!");
}
//////////////////////////////////////////////////////////////////////////////////
var mat = prompt("Vvedi maternoe slovo", "Хуй Пизда Манда");
switch(mat) {
    case "Хуй":
        console.log("У тебя " + mat);
        break;
    case "Пизда":
        console.log("У тебя " + mat);
        break;
    case "Манда":
        console.log("У тебя " + mat);
        break;
    default:
        console.log("Ты ДАУН !!!");
}
////////////////////////////////////////////////////////////////////////////////////
var iLoveJavaScript = true;
var iLoveLearning = true;
if(iLoveJavaScript && iLoveLearning) {
    console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
    console.log("Let's see if we can change your mind.");
} else {
    console.log("You only like one but not the other? We'll work on it.");
}
/////////////////////////////////////////////////////////////////////////////////////
var hungry = true;
var foodHere = true;
var eat = function() {
    if((hungry && foodHere) === true) {
        return true;
    } else {
        return false;
    }
};
console.log(eat());
//////////////////////////////////////////////////////////////////////////////////////
var tired = true;
var bored = false;
var nap = function() {
    if((tired || bored) === true) {
        return true;
    } else {
        return false;
    }
};
//////////////////////////////////////////////////////////////////////////////////////
var programming = false;
var happy = function() {
    if(programming !== true) {
        return true;
    } else {
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////
var lunch = prompt("What do you want for lunch?", "Type your lunch choice here");
switch(lunch) {
    case 'sandwich':
        console.log("Sure thing! One sandwich, coming up.");
        break;
    case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
    case 'salad':
        console.log("Sounds good! How about a caesar salad?");
        break;
    case 'pie':
        console.log("Pie's not a meal!");
        break;
    default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
///////////////////////////////////////////////////////////////////////////////
var color = prompt("What's your favorite primary color?", "");
switch(color) {
    case 'red':
        console.log("Red's a good color!");
        break;
    case 'blue':
        console.log("That's my favorite color, too!");
        break;
    case "yellow":
        console.log("Oo thats yellow");
        break;
    default:
        console.log("I don't think that's a primary color!");
}
//////////////////////////////////////////////////////////////////////////////////
var candy = prompt("What's your favorite candy?", "Type your favorite candy here.");
switch(candy) {
    case 'licorice':
        console.log("Gross!");
        break;
    case 'gum':
        console.log("I like gum!");
        break;
    case 'beets':
        console.log("...is that even a candy?");
        break;
    default:
        console.log("aaaaa");
}
//////////////////////////////////////////////////////////////////////////////////
var answer = prompt("Tipe any number from 1 to 3", "NUMBER");
switch(answer) {
    case '1':
        console.log("Your number is " + answer);
        break;
    case '2':
        console.log("Your number is " + answer);
        break;
    case '3':
        console.log("Your number is " + answer);
        break;
    default:
        console.log("I said FROM 1 to 5 !!!");
}
//////////////////////////////////////////////////////////////////////////////////
var mat = prompt("Vvedi maternoe slovo", "Хуй Пизда Манда");
switch(mat) {
    case "Хуй":
        console.log("У тебя " + mat);
        break;
    case "Пизда":
        console.log("У тебя " + mat);
        break;
    case "Манда":
        console.log("У тебя " + mat);
        break;
    default:
        console.log("Ты ДАУН !!!");
}
////////////////////////////////////////////////////////////////////////////////////
var iLoveJavaScript = true;
var iLoveLearning = true;
if(iLoveJavaScript && iLoveLearning) {
    console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
    console.log("Let's see if we can change your mind.");
} else {
    console.log("You only like one but not the other? We'll work on it.");
}
/////////////////////////////////////////////////////////////////////////////////////
var hungry = true;
var foodHere = true;
var eat = function() {
    if((hungry && foodHere) === true) {
        return true;
    } else {
        return false;
    }
};
console.log(eat());
//////////////////////////////////////////////////////////////////////////////////////
var tired = true;
var bored = false;
var nap = function() {
    if((tired || bored) === true) {
        return true;
    } else {
        return false;
    }
};
//////////////////////////////////////////////////////////////////////////////////////
var programming = false;
var happy = function() {
    if(programming !== true) {
        return true;
    } else {
        return false;
    }
};
console.log(happy());
/////////////////////////////////////////////////////////////////////////////////////
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text1 = "";
var i;
for(i = 0; i < cars.length; i++) {
    text1 += cars[i] + "   ";
}
console.log(text1);
var text = "/"
var a = 0;
do {
    console.log(text += +a + text);
    a++;
}
while (a <= 3);
var getToDaChoppa = function() {
    do {
        console.log("GET TO DA CHOPPA!")
    } while (false)
};
getToDaChoppa();
/////////////////////////////////////////////////////////////////////////////////////
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text1 = "";
var i;
for(i = 0; i < cars.length; i++) {
    text1 += cars[i] + "   ";
}
console.log(text1);
////////////
var text = "/"
var a = 0;
do {
    console.log(text += +a + text);
    a++;
}
while (a <= 3);
////////////
var getToDaChoppa = function() {
    do {
        console.log("GET TO DA CHOPPA!")
    } while (false)
};
getToDaChoppa();
/////////////////////////////////////////////////////////////////////////////////////
