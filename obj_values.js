/* 
1.values : values er kaj holo kuno object er sob gulo property er value eksate array rop e output e dekanu hoi,
2.keys:  keys er maddome kuno object joto property ase sob gulo property ekta array rop e print kora hoi.

ortat:
values bolle kuno obj er sob gulo key/property er  values dekanu hoi.
 keys bolle kuno obj er sob gulo property/key dekanu hoi. & 
*/

const computer = {

    'brand name':'hp',
    price: 35000,
    core: 'i5',
    gen :'8gen'
}

console.log(computer);
// (values) er syntex: 
const values = Object.values(computer);
console.log(values);

// (keys) er syntex: 
const keys = Object.keys(computer);
console.log(keys);

