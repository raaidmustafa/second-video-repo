
console.log("hello world")
//this is a code of no use 
/*this code prints 'hello world' on the google chrome console
other than that the code has no use 
this is a multiple line comment being used to elaborate the use for the code above*/
//logical operators
let a = 6;
let b = 5;

console.log("cond1 && cond2 = ", a < b && a === 6);

//unary operators
let c = 5;
let d = 2;

console.log("c++ =", c++)
console.log("c =", c)

//Assignment operatiors
let e = 5;
let f = 2;

e += 4; // e = e + 4
console.log("e =", e);

//comparision operators
let g = 5;
let h = 2;

console.log("g != g", g != g);

const instagramprofile = {
    username: "raaid_mustafa",
    followers: 600,
    following: 502,
    fullname: "RaaidMustafa",
    posts: 0,
    bio: "WSM'26",
    highlights: true,
    isverified: false,
    privateaccount: true,
    website: "https://raaidmustafa.com"
}
    
console.log(instagramprofile)

//random
let i = 28
let j = 42

console.log("i++ =", i++)
console.log("i =", i)

//random 2
let k = 10
let l = 20

console.log("--k =", --k)
console.log("k =", k)
console.log("k != l", k != l)
console.log("k - l", k - l)

//conditional statements
let age = 25;
if (age >= 18) 
    console.log("You are eligible for the driving permit and will be redirected to the driving test.");
else if (age < 18)
    console.log("you are not eligible for the driving permit and will be redirected to the home page.");

//random 3
let input_digit = 12
if (input_digit % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//random 4
let input_number = 15.2
if (input_number % 1 === 0)
    console.log("The number is an integer.");
else
    console.log("The number is not an integer.");

//random 5
let mode = "dark";
let color;

if (mode === "dark") 
    color = "black";
else if (mode === "light") 
    color = "white";
else
    color = "blue";

console.log("The color is", color);

let AGE = 20;
let result = AGE >= 18 ? "adult" : "minor";

console.log("you are an", result);

let fullname = prompt("hello there! What is your fullname?");
if (fullname === "raaid mustafa") {
    let a = prompt("Welcome back, Raaid Mustafa! How was your day");
    a.toLocaleLowerCase();
} else {
    alert(fullname + " you are not raaid mustafa, therefore you will not be allowed to enter this page.");
    alert("Have a good day " + fullname + "!");
}
  