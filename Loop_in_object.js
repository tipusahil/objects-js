/* kivabe kuno obj e loop calanu hoi tar syntex & explaination:

1.obj e loop calanur jonno for loop er varaible name hisebe prop/keys use kora jai.
2. obj e arekta upai e loop calanu jai taw for of diye tar jonno obj/myphone k keys e nite hobe, jeheto keys obj er er property gulo array er moto kore sajai nei tkn for of diye keys variable e loop calanu jabe .etai hocce obj e for of diye loop calanur system.
 


##1.obj e loop calanor 3/4ta system ase tar modde ekta hocce for ( in ) for in,,,,array er ketre for (of) use hoi kintu obj er ketre for(in) use kora hoi.jmn: 
for of : array te loop calanur  ketre use hoi.
for in : obj e loop calanur ketre use hoi.jmn: for( const prop/key in obj_name) 
{xyz loop block}
 evabei muloto obj e loop calano hoi. 


*/


const myphone = {
brand: 'apple',
name:'iphone xs',
price: 'almost 32k',
secondHand: true,
color:'white',

}

/*1.obj e for in loop er maddome (prop)name fix variable diye loop calanur
1.syntex: */
for(const prop in myphone){
    // console.log( prop, myphone[prop] ); niser 2line er shorthand.
    console.log(prop);
    console.log(myphone[prop]);
}

/* obj/myphone ta keys e convert korle array er moto sajai nei,tai for of loop calanu jabe.jmn:
2.syntex: */
for (const key of keys){
    // console.log(key, myphone[key] ); niser 2line er shorthand.
    console.log(key);
    console.log(myphone[key]);
    // console.log(key," : ", myphone[key] ); evabew lika jabe, majkane clone dibe.

}

/* 
1.for in loop cole obj e
 2.prop holo obj er jonno ekta building variable name.


*/
/*
for(const prop in myphone){//ekane prop ta hocce ekta varaible tobe eta obj er jonno fix etka varaible jar modde obj er sob property er name add hoye jai.

    console.log(prop);/*output: myphone obj er key/property loop er moto ekta ekta kore print korbe.debug kore dekle buja jai..without value,karon value print korbe niser console deke

   value soho print korbe,jotobar loop colbe toobar prop er property change hobe, & value o change  hobe. debug kore dektlei buja jabe.

console.log(myphone[prop]);//ekn prop varaible ta dewai prop varaible e jeheto myphone obj er sob property er name (for in er karone prop e store hoye) ase tai  prperty name er sate sate value gulaw print kore dekabe.


}
*/


/*2.obj k keys e convert kore then for of loop er maddome obj/muphone e loop calanur 
2.syntex: */

// age keys e convert kora hocce: 
const keys = Object.keys(myphone);
console.log(keys);

/* obj/myphone ta keys e convert korle array er moto sajai nei,tai for of loop calanu jabe.jmn:
2.syntex: */
for (const key of keys){
    // console.log(key, myphone[key] ); niser 2line er shorthand.
    console.log(key);
    console.log(myphone[key]);
}
// node Loop_in_object.js



