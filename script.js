
console.log("Palindrome")
function Palindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str = prompt("Enter the word : ")
console.log(Palindrome(str)); 
