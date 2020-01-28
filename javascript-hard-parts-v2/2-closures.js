// http://csbin.io/closures


function createFunction() {
  return () => {
    console.log("Hi")
  }
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();


createFunctionPrinter = (input) => () => {console.log(input) }


// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // Will output 1
willCounter(); // will output 2
willCounter(); // will output 3

jasCounter(); // will output 1
willCounter(); // will output 4


function addByX(x) {
  return function(y){
    return x + y
  }
}
// Lol ES6, Readability?!
addByX = (x) => (y) => x + y

const addByTwo = addByX(2);
// now call addByTwo with an input of 1
console.log(addByTwo(1)) //should return 3
console.log(addByTwo(2)) //should return 4
console.log(addByTwo(3)) //should return 5

const addByThree = addByX(3)
console.log(addByThree(1)) //should return 4
console.log(addByThree(2)) //should return 5

const addByFour = addByX(4)
console.log(addByFour(4)) //should return 8
console.log(addByFour(10)) //should return 14



//--------------------------------------------------
// Extension
//--------------------------------------------------

/* Longer version */
function once(func){
  let value = null
  function inner(input){
    if(!value) value = func(input)
    return value
  }
  return inner
}

function once(func) {
  let value = null
  return (input) => {
    if(!value) value = func(input)
    return value
  }
}



const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6

/* Longer version */
function after(count, func) {
  let counter = 0;
  function inner(){
    counter++
    if(count <= counter){
      func()
    }  
  }
  return inner
}

function after(count, func){
  let counter = 0
  return () => {
    counter++
    if(count <= counter) func()
  }
}



const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

// not sure about this extension definition?
function delay(func, wait) {
  setTimeout(func, wait)
} 

delay(
  function(){ 
  console.log("Hello after a ")}, 
  200
)

function rollCall(names) {
  let i = 0
  return () => {
    if(i < names.length) console.log(names[i])
    else console.log("Everyone Accounted For")
    i++
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log("\nChallenge 8")
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'

