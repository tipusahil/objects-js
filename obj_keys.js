const computer = {

    'brand name':'hp',
    price: 35000,
    core: 'i5',
    gen :'8gen'
}

console.log(computer);

// (keys) er syntex: 
const keys = Object.keys(computer);
console.log(keys);
//key er vitore computer name obj ta reke ,then computer obj ta keys likew print kora jabe, & keys er speciallity holo computer obj er joto property/key ase sob gulo property name k ekta array er moto kore output dibe.


/* keys:  keys er maddome kuno object joto property ase sob gulo property ekta array rop e print kora hoi.
2.values : values er kaj holo kuno object er sob gulo property er value eksate array rop e output e dekanu hoi,

ortat:
 keys bolle kuno obj er sob gulo property/key dekanu hoi. & 
 values bolle kuno obj er sob gulo key/property er  values dekanu hoi.
*/

// (values) er syntex: 
const values = Object.values(computer);
console.log(values);

