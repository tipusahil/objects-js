/* */

const person = {
    name : 'hablu',
    agee : 22,
    skill: 'web magicial',
  "amar book": "english",
}

console.log(person);//output: person object er sob property er value output e dekabe.karon direct object name tai print kora hoise.


// jodi kuno 
console.log(person.agee);/*output : (person) obj er (agee) property er value (22) dekabe.

22 , evabei multo object er property/key er value deka hoi. print kora hoi 

abr jodi obj er property/key er value change kortee cai thle 2ta niome change kora jabe, jmn:

1. dot(.)diye jmn: person.agee ="notun value";
2.bracket diye jmn: person["agee"] = "notun value" 
bracket diye change koratai subida karon jodi property er name multiple word hoi tkn dot(.) diye value change korte kinba value dektte moskil,kintut brackett diye hole obj er property/key name jodi multiple word o hoi thlew change kora kinba write kora jai.jmn: 

person.amr book = 'english'; //but eta error dibe . diye multiple wor wala property lika jaina.

person['amar book'] = 'english';  eta tik ase.

*/

/*object er kuno property/key er value change
object er name(person) then dot (.) erpore jei property er value change korte cai sei property er name then =  sign er pore jei notun value ditee cai ota dite hobe

*/
console.log(person);// output e 

// node obj_change_system.js