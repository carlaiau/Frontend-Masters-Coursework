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
	for(i = 0; i < array.length; i++){
		initialValue = callback(initialValue, array[i])
	}
	return initialValue
}

// Extension 2 tester
const nums = [4, 1, 3]
const add = (a, b) => a + b

console.log("Reduce:", reduce(nums, add, 0))

//Extension 3

function intersection(initialValue, ...arrays) {	

	return reduce(arrays, (current, next) => {
		const filtered = []
		forEach(next, el => {
			if(current.includes(el)) filtered.push(el)
		})
		return filtered
	}, initialValue)
}

console.log(intersection([5, 10, 15, 20, 13], [15, 88, 1, 5, 7, 13], [1, 13, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {

}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

