

// Temperature converter
const degree = Math.floor(Math.random()*100) + 1
console.log("It's "+degree+"\u00B0C today. That's "+ degree*9/5+32+"\u00B0F");
console.log("It's "+degree+" \u00B0F today. That's " + (Math.ceil(degree-32)*5/9) + " \u00B0C");

// Age calculator
const currentYear = new Date().getFullYear();
const birth = prompt("Which year were you born?");
document.write("You're " + (currentYear-birth) +" years old");

// Fortune teller
const a = Math.floor(Math.random() * 5)+ 1;
const b = prompt("Your love -> ");
const c = prompt("Dream place ->");
const d = prompt("Dream career ->");

console.log("You will be a " +d+ " in " +c+ ", and married to "+b+" with "+a+" kids.");


