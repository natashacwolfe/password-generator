

let sChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', ';'];
let nChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let pwLength = prompt('How many characters do you want in your pasword?');
let setSpChar = confirm('Do you want special characters in your password? Press OK for yes, press CANCEL for no');
let setNuChar = confirm('Do you want numbers in your password? Press OK for yes, press CANCEL for no');
let setLwChar = confirm('Do you want lowercase characters in your password? Press OK for yes, press CANCEL for no');
let setUpChar = confirm('Do you want uppercase characters in your password? Press OK for yes, press CANCEL for no');

console.log(pwLength);
console.log(setSpChar);
console.log(setNuChar);
console.log(setLwChar);
console.log(setUpChar);
