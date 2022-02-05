/*
primitive data type
data types
1.number
2.string
3.boolen
4.undefined
5.null
6.object
non-primitive
7.symbol
*/

let a = 'hello';
let b = a;
console.log(a)

a = 'gello';
console.log(a,b);
const x = {name:'asif'}

const y = x;
console.log(x,y);
// x.name = 'khorim';
y.name = 'main thing';
console.log(x,y);
