/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding ensures the 'this' keyword doesn't work globally
* 2. Implicit binding makes the 'this' keyword work on a specific object(function)
* 3. Explicit Binding makes the 'this' keyword work on an object
* 4. New Binding makes the 'this' keyword link objects
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function pacMan(){
  console.log(this.pac);
}
pacMan();
const pac = 'wakawaka';

// Principle 2

// code example for Implicit Binding
let apple = {
  name: 'Green',
  taste: 'sour',
  eat: function(){
    console.log(this.taste);
  }
}

apple.eat();

// Principle 3


// code example of New Binding
function Fruit(taste){
  this.thing = taste;
}

let pineapple = new Fruit('sour');

console.log(pineapple.thing);

// Principle 4

// code example for Explicit Binding
function milk(){
    console.log(this.taste);
  }
  
  let cream ={
    name: 'Casper',
    taste: 'mmmcreamy'
  }
  
milk.call(cream);
