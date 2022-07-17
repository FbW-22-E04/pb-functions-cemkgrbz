//1

const sumIntFrom1ToN = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}
console.log(sumIntFrom1ToN(0))

//2

function sumOfCubes (x,y,z) {
    x = (x**3);
    y = (y**3);
    z = (z**3);
    return x+y+z
}
console.log(sumOfCubes(1,2,3)) //for empty parameters write a condition

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

    // if (y.search(x)=0) {
    //     return true
    // } else {
    //     return false
    // }
}
isStrStartOfWord('pppppp', 'Napoli')

//4

function isLEQZero (n) {
    if (n <= 0) {
        // console.log(true)
        return true
    } else {
        // console.log(false)
        return false
    }
}
console.log(isLEQZero(-48))

//5

function countOccurrences (x, y) {
    console.log(x.split(y).length);
}
countOccurrences ('Count occurrences', 'c')

// function countOccurrences2 (str, letter) {
//     let counter = 0;
//     for (let i = 0; i <str.length; i++){
//         if(str[i]==letter){
//             counter++;
//         }
//     }
//     return 'The string have this letter for '+ counter + ' times';
// }
// console.log(countOccurrences2('xxxxxxxxyyy', 'y'))

//6

function calcBaseToExponent (x, y) {
    let expPower = 1;
    for (let i = 1; i <= y; i++){
        expPower = expPower*x
    };
    return expPower;
};
console.log(calcBaseToExponent(5,5))

//or

function xExponentY (x, y) {
    return x**y 
}
console.log(xExponentY(5,5))

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
    console.log(`The snack company should provide you with ${((maxAge-x)*365)*y} units, until you are a ripe old age of ${maxAge}. Happy snacking!`)
}
calcLifetimeSupplyMaxAge (32, 2, 70)

//b
function calcLifetimeSupplyFloating (x, y, maxAge) {
    console.log(`The snack company should provide you with ${(((maxAge-x)*365)*y).toFixed(3)} units, until you are a ripe old age of ${maxAge}. Happy snacking!`)
}
calcLifetimeSupplyFloating (32, 1.67, 70)

//9

function isWaldoHere (str) {
    let newStr = str.toLowerCase()
    return newStr.includes('waldo')
}

console.log(isWaldoHere('I am Waldo'))


//10

function isEqualSlices (x,y,z) {
    if (y*z <= x) {
        // console.log(true)
        return true
    } else {
        // console.log(false)
        return false
    }
}
console.log(isEqualSlices (18, 6, 3))

//11

function isEqualNumXandO (n) {
    if (n.split('x').length == n.split('o').length) {
        // console.log(true)
        return true
    } else {
        // console.log(false)
        return false
    }
}
console.log(isEqualNumXandO('xo xo xo xo xx'))

//12

// function isPrime(num) {
//     if (num<=1) {
//         return 'Not a prime'
//     } else if (num > 2 && num % 2 === 0 && num % 3 === 0){
//         return false
//     } else { 
//         for....
//         // return 'Its a prime number' //else is optional here
//     }
// }

// console.log(isPrime(9))

function isPrime(num) {
    for(let i=2; i<num; i++) {
        if(num % i === 0) return 'not a prime'
    }
        return num>1
}
console.log(isPrime(12))

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