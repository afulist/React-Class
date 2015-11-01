var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); 
        return x;
    }
    return x; 
}
console.log(func(false)); 

// let x = 3;
// function func(randomize) {
//     if (randomize) {
//         let x = Math.random();
//         return x;
//     }
//     return x;
// }
// console.log(func(false)); 