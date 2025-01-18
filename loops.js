/*
1.for loop
2.while loop
3.do while loop
4.for of --> array te loop korar jonno /caile for/while/do while diyew kora jai array

5.for in -->object te loop korar jonno,kintu 


*/

// for in loop in obj:

const collage = {
class: '11,12',
student: 4000,
department:['CST','CIVIL','EEE'],
}

// for in loop in an obj: 
for(const prop in collage){
    console.log(prop,'|');//output: collage er prperty gulo ekta ekta kore loop korbe prop varaible er karone. & for in loop er karone

    // ar jodi collage obj er property er value print korte cai tkn niser niome korte hbe: 
    // console.log(collage[prop] ); 

    // abr caile cllage obj er property & value eksate eki line e print kora jabe,.niser niome:
    console.log(prop,  ' | ' , collage[prop]);//output: 
}

var friends = ['elon', 'bill','jugar','mokash'];
// for of loop in array:
for(let friend of friends){
    console.log(friend);// output: friends er value gulo ekta ekta kore loop kore dekabe.
    /* 
class  |  11,12
student |
student  |  4000
department |
department  |  [ 'CST', 'CIVIL', 'EEE' ]
    */
}

// normal for loop with number:
for(let i =0; i<10; i++){
//   console.log(friends[i]); //friends array er index er value gulo ekta ekta kore dekabe.
}

for(let x= 0; x < friends.length; x++){

    // console.log(friends[x] );// length use korle less then er sate equal sign use korle -1 korte hbe.
// ar jodi use korte na cai tkn <friends.length evabe just lessthen use korte hobe.
}

var numbers = [23,23,232,43,433,5];

// for loop: 
for(let n = 0; n < numbers.length ; n++){
    // console.log(numbers[n]);
}

// while loop:
let w =0;
while(w < numbers.length){
// console.log(numbers[w]);
    w++;
}

// do while loop: 
var d = 0; 
do{
console.log(numbers[w]);
    d++;
}while(d < numbers.length);