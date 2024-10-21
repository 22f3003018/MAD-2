let name = "Farhan";
console.log(name);

// rules for variables
// cannot be reserved keywords
// should be meaningful
// cannot start with a number
// cannot contain a hyphen (-)
// Are case-sensitive 

const var1 = 10;
console.log(var1);

// constants cannot be changed, implied in the name 
// in javascript there are primitive and reference types when working with variables
// some of the primitives in javascript
let name1 = "Farhan"; // string literal
let age =19; //number literal
let isTrue = false; // boolean literal
let something = undefined // undefineded literal
let ntohing = null // null literal

// some of the reference types are objects, arrays, and functions
//objects
let person ={
    name:'Farhan',
    age:19
};
// dot notation
person.name = "Mohammed";
// bracket notation
person.age = 20;
console.log(person);

// Arrays

//Functions
function greet(){
    console.log('Hello world')
}

greet();