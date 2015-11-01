var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));

// let arr1 = ['a', 'b'];
// let arr2 = ['c'];
// let arr3 = ['d', 'e'];

// console.log([...arr1, ...arr2, ...arr3]);



// ES7
var anna = { name: 'anna' };

var jerry = { name2: 'jerry' };

console.log('anna + jerry ',{...anna, ...jerry});