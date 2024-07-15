console.log("celcius to farenheit")
function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
}
let n = prompt("Enter the number");
console.log(celcToFahr( n ));