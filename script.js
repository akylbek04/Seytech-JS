const currentYear = new Date().getFullYear();
const birth = prompt("Which year were you born?");
document.write("You're " + (currentYear-birth) +" years old");