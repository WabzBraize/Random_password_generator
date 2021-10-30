const randPass = document.getElementById('randPass');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generateBtn = document.getElementById('generateBtn');
const passLen = document.getElementById('passLen');

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '%\|[]{}@#$_&-+()*";!?';

generateBtn.addEventListener('click', generateRandomPass);


function generateRandomPass(){

function getUpper(){
return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLower(){
return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
return symbols[Math.floor(Math.random() * symbols.length)];
}

/*console.log(getUpper());
console.log(getLower());
console.log(getNumber());
console.log(getSymbol());
*/

let passwordLength = passLen.value;
let password = '';
for(var i = 0;i < passwordLength; i++){
password += getPassword();
}

randPass.innerText = password;

function getPassword(){
let passArray = [];
if(upperCase.checked){
passArray.push(getUpper())
}

if(lowerCase.checked){
passArray.push(getLower())
}

if(number.checked){
passArray.push(getNumber())
}

if(symbol.checked){
passArray.push(getSymbol())
}

if(passArray.length === 0){
return "";
}

return passArray[Math.floor(Math.random() * passArray.length)];
}


}

const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
let textarea = document.createElement('textarea');
text = randPass.innerText;
textarea.innerText = text;

document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
textarea.remove();
showToast();
});
 

function showToast(){
var toast = document.createElement('button');
toast.classList.add('toast-btn');
toast.innerText = 'Password Copied!';
document.body.appendChild(toast);
setTimeout(() => {
toast.remove();
}, 1500);
}

