function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
var left_age = 90 - age;
var days = left_age*365;
var weeks = left_age*52;
var months = left_age*12;

console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")

/*************Don't change the code below**********/
}

function bmiCalculator(weight, height){
    var bmi = weight/(height*height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);