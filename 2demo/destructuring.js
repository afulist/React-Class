var [a, ,b] = [1,2,3];
// a === 1;
// b === 3;
console.log(`var [a, ,b] = [1,2,3]; 
	=> a b :`, a, b)

var [a] = [];
console.log(`var [a] = []; 
	=> a:`, a)

var [a = 1] = [];
console.log(`var [a = 1] = []; 
	=> a:`, a)

var { a, b } = { a:'2', b:'w' };
console.log(`{ a, b } 
	=> a b:`, a, b)
