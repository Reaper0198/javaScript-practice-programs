function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function calculator(a, b, op){
    return op(a, b);
}

// here we are passing the name of the function as argument in the calculator function.
console.log(calculator(6, 9, multiply));