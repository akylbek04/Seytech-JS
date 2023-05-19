
// Temperature converter
const degree = Math.floor(Math.random()*100) + 1
console.log("It's "+degree+"\u00B0C today. That's "+ degree*9/5+32+"\u00B0F");
console.log("It's "+degree+" \u00B0F today. That's " + (Math.ceil(degree-32)*5/9) + " \u00B0C");