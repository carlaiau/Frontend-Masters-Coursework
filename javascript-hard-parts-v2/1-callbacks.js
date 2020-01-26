http://csbin.io/callbacks

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s"
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	let output = []
	for(i = 0; i < array.length; i++){
		output.push(callback(array[i]))
	}
	return output
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
	for(i = 0; i < array.length; i++){
		callback(array[i])
	}
}

// see for yourself if your forEach works!
forEach([1,2,3,4,5], (element) => {
	console.log(element * 10)
})


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let output = []
	forEach(array, (element) => {
		output.push(callback(element))
	})
	return output
}

console.log("MapWith:", mapWith([1,2,3], addTwo))

//Extension 2
function reduce(array, callback, initialValue) {
	for(let i of array){
		initialValue = callback(initialValue, i)
	}
	return initialValue
}

// Extension 2 tester
const nums = [4, 1, 3]
const add = (a, b) => a + b

console.log("Reduce:", reduce(nums, add, 0))

//Extension 3

function intersection(...arrays) {

	/* 
	Note usage of real reduce and real forEach
	Refer to specification for algo definition as to how it functions without
	a specified initialValue. 
		
	https://tc39.es/ecma262/#sec-array.prototype.reduce
	
	If you do define the init value as an empty array this will not work.
		
	*/
	const correct = arrays.reduce((current, next) => {
		const filtered = []
		next.forEach((el) => {
			if(current.includes(el)) filtered.push(el)
		})
		return filtered
	}) 

	// Using only our functions
	const init = arrays[0]
	const custom = reduce(arrays, (current, next) => {
		const filtered = []
		forEach(next, (el) => {
			if(current.includes(el)) filtered.push(el)
		})
		return filtered
	}, init)

	return custom
	
}

console.log("Intersection: ", intersection([5, 10, 15, 20,1], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20], [1, 5, 20]));

//Extension 4
function union(...arrays) {
	
	return reduce(arrays, (seen, next) => {
		forEach(next, (element) => {
			console.log(element)
			if(!seen.includes(element)) seen.push(element);
		})
		return seen
	}, [])
}

console.log("Union: ", union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

	let index = 0
	return reduce(array1, (acc, el) => {
		if(callback(el) == array2[index]){
			acc[el] = array2[index]
		}
		index++
		return acc
	}, {})

	// Using built-in reduce would allow automatic index declaration and incrementation
	return array1.reduce((acc, el, index) => {
        if(callback(el) == array2[index]){
            acc[el] = array2[index]
        }
        return acc
    }, {})
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

	return reduce(arrVals, (acc, cur) => {
		acc[cur] = []
		forEach(arrCallbacks, (fn) => {
			acc[cur].push(fn(cur))
		})
		return acc
	}, {})
}

console.log(multiMap(
	['catfood', 'glue', 'beer'], 
	[	
		function(str) { return str.toUpperCase(); }, 
		function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, 
		function(str) { return str + str; }
	]
));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
	return reduce(Object.keys(obj), (acc, key) => {
		if(obj[key] == callback(key)){
			acc[key] = callback(key)
		}
		return acc
	}, {})
	
}

const cities = {
	London: 'LONDON',
	LA: 'Los Angeles',
	Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) 
// Should log { London: 'LONDON', Paris: 'PARIS'}

