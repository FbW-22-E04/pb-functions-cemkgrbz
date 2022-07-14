//1

const sumIntFrom1ToN = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}
console.log(sumIntFrom1ToN(10))

//2

function sumOfCubes (x) {
    let sum = 0; 
    for (let i = 1; i <= x; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}
console.log(sumOfCubes(5));


// console.log(sumOfCubes(2, 3, 4))

// const sumOfCubes = (x) => {
//     let sum = 0;
//     for (let i = 1; i <= x; i++) {
//         sum += Math.pow(i, 3);
//     }
//     return sum;
// }
// console.log(sumOfCubes(5))

//3

function isStrStartOfWord (x, y) {
    if (y.startsWith(x)){
        console.log(true);
    } else {
        console.log(false);
    }
}
isStrStartOfWord('Ro', 'Napoli')

//4

function isLEQZero (n) {
    if (n <= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isLEQZero(-45)

//5

function countOccurrences (x, y) {
    console.log(x.split(y).length);
}
countOccurrences ('Count occurrencccccces', 'c')

//6

function calcBaseToExponent (x, y) {
    let expPower = 1;
    for (let i = 1; i <= y; i++){
        expPower = expPower*x
    };
    return expPower;
};
console.log(calcBaseToExponent(4,4))

//7

function dogAge (n) {
    console.log(`Your doggo is ${n*7} years old in dog years`)
}
dogAge(3)

//8

function calcLifetimeSupply (x, y) {
    console.log(`The snack company should provide you with ${((100-x)*365)*y} units, until you are a ripe old age of 100. Happy snacking!`)
}
calcLifetimeSupply (32,2)

//Bonus
//a
function calcLifetimeSupplyMaxAge (x, y, maxAge) {
    console.log(`The snack company should provide you with ${((maxAge-x)*365)*y} units, until you are a ripe old age of 100. Happy snacking!`)
}
calcLifetimeSupplyMaxAge (32, 2, 70)

//b
function calcLifetimeSupplyFloating (x, y, maxAge) {
    console.log(`The snack company should provide you with ${(((maxAge-x)*365)*y).toFixed(3)} units, until you are a ripe old age of 100. Happy snacking!`)
}
calcLifetimeSupplyFloating (32, 1.67, 70)

//9

//10

function isEqualSlices (x,y,z) {
    if (y*z <= x) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isEqualSlices (18, 6, 3)

//11

function isEqualNumXandO (n) {
    if (n.split('x').length == n.split('o').length) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isEqualNumXandO('xo xo xo xo xx')

//12



//13 (in progress)

// function emailAddressCheck (x) {
//     if (x.match('@') && x.match('.')){
//         console.log(true)
//     }
//     else if (x.startsWith('@') || x.endsWith('@') || x.startsWith('.') || x.endsWith('.') || x.includes('@.') || x.includes('.@') || x.includes('..')) {
//         console.log(false)
//     }
// }

// emailAddressCheck('ysdf@.com')