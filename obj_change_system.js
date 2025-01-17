/* */

const person = {
    name : 'hablu',
    agee : 22,
    skill: 'web magicial',
  "amar book": "english",

}

console.log(person);//output: person object er sob property er value output e dekabe.karon direct object name tai print kora hoise.

console.log(person.agee);//output : (person) obj er (agee) property er value (22) dekabe.

const boyos = person.agee;// obj er key er value evabe ekta variable er modde raka jai. & caile seta print korew deka jai.jmn: 
console.log(boyos);// output: 22 




//...............obj er property er value change, pirnt korar 2 ways................

// obj er property/key er value change kinba print korte caile 2ta way te kora jai 1.dot(.)notation diye jmn: 
//person.amr book = 'english';// but eta error dibe . diye multiple wor wala property lika jaina.


// otoba 2.(['']) 3rd bracket notation diye, etai recomended ,,3rd bracket er vitore qutetion er viotre property name diye jmn: 
person['amar book'] = 'ICT';//  eta tik ase.
console.log(person['amar book']);// output:  ICT.

console.log(person);// output: person obj er changed kora data soho all data dekabe.

// node obj_change_system.js