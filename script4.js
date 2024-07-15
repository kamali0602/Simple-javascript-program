console.log("Factorial");
let n = prompt("Enter the number : "); 
function fact(n) { 
    let a = 1; 
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        a = a * i; 
    return a; 
}

console.log(fact(n));