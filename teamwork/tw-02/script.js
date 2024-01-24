let month = parseInt(prompt("Enter the month (1-12)"))
let day = parseInt(prompt("Enter the day (1-31)"))

if (month < 1 || month > 12 || day < 1 || day > 31){
    console.log("Invalid input. Please enter a valid month and day.");
} else if ((month == 2 && day >= 21) || (month > 2 && month < 6)) {
    console.log("Spring");
} else if (month >= 6 && month < 9) || (month == 9 && day <= 21) {
    console.log("Summer");
}
