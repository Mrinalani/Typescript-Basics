"use strict";
const num1Element = document.getElementById('numb1');
const num2Element = document.getElementById('numb2');
const buttonElement = document.querySelector('button');
// array types
const numarray = [];
const textarray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    else {
        +num1 + +num2;
    }
}
// obj in parameter
function printResult(resultObj) {
    // return (resultObj.val)
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numarray.push(result);
    const stringresult = add(num1, num2);
    textarray.push(stringresult);
    console.log(result);
    console.log(stringresult);
    console.log(numarray, textarray);
    // giving obj as parameter
    printResult({
        val: result,
        timestamp: new Date()
    });
});
// example of generic type is   const numarray: Array<number> = [];
// other example of genrics type is promise
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split('w'));
});
