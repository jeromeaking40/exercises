// Write a function called 'tripleFive' which loops three times using a for loop.
//Each iteration of the loop, output 'Five!' using console.log.
//tripleFive()
// Five! Five! Five!
function tripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("Five!");
    };
}

tripleFive();

//Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
//lastLetter('hello') should return 'o'
//lastLetter('island') should return 'd'

function lastLetter(name) {
    return name.charAt(name.length - 1)
}

console.log(lastLetter("Jerome"));

//Write a function called 'square' which takes a single argument which is a number, and returns number * number.
//square(3) should return 9
//square(5) should return 25

function square(number) {
    return number * number;
}
console.log(square(10));


//Write a function called 'negate' which takes a single number argument and returns the negative of that number.
//negate(5) should return -5
//negate(-8) should return 8

function negate(number) {
    return -Math.abs(number);
}
console.log(negate(3));

//Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
//toArray(1, 4, 5) should return [1, 4, 5]
//toArray(8, 9, 10) should return [8, 9, 10]

function toArray(number, numberTwo, numberThree) {
    var array = [];
    array.push(number, numberTwo, numberThree);
    return array;
}
console.log(toArray(1, 5, 9));

//Write a function called 'startsWithA' which takes a single string argument
//and returns true if the given string's first letter is 'A' and false otherwise.
//startsWithA('aardvark') should return true
//startsWithA('bear') should return false

function startsWithA(name) {
    if (name.startsWith("a".toUpperCase())) {
        return true;
    } else {
        return false;
    };
}
console.log(startsWithA("Bobby"));

//Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'

function excite(name) {
    return name + '!!!';
}
console.log(excite("yes"));

//Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it.
// You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true

function sun(name) {
    if (name.includes('sun')) {
        return true;
    } else {
        return false;
    }
}
console.log(sun('jerome'));

//Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false

function tiny(number) {
    if (number >= 0 && number <= 1) {
        return true;
    } else {
        return false;
    }
}
console.log(tiny(5));

//Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds)
// and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625

function getSeconds(time) {
    var time = new Date(mm: ss);
    return time.getSeconds();
}

console.log(getSeconds('01:30'));
