var numbers = [1,2,3,4,5,6,7];

console.log(numbers)

/*reverse korar system 1: */
// numbers.reverse();
// console.log(numbers)

// or niser moto  variable e reke then print kora jbe.
// var reversed1 = numbers.reverse();
// console.log(reversed1);


/*reverse korar system 2:
abr caile manually  ekta ekta dhore dhorew reverse kora jai. */
var numss = [1,2,3,4,5,6,7,8,9];
var revers11 = [];

console.log(numss);
// for of loop diye array er data gulo reverse korar system/syntex:

for(const num of numss){
    // console.log(num);
revers11.unshift(num);//(numss)array er data gulo ekta ekta kore (num) varaible & (for of) loop er karone asbe.then seta (revers11)ei array te  ekta ekta kore shuror dike add kore dibe, jkn 1 dibe tkn 1 boshbe, then jkn 2 dibe tkn 2 1 er age boshe jabe, evabei muloto numss array er data gulo arekta array te reverse akare bohsanu jabe.
}

console.log(revers11);

/*reverse korar system 3: 
 for loop /while or do while loop er madddomew kuno array er data gulo reverse kora jai.
*/

var serial = ['1st', '2nd','3rd','4rth'];
console.log(serial)

var reverse_3 = [];  //erokom kali array k bola hoi mt array.same kali obj k mt obj bola hoi
var mt_object = {};  //erokom kali obj k bola hoi mt object


for( let x = 0; x < serial.length; x++){
    // console.log(serial [x] );

    reverse_3.unshift(x);
    console.log(reverse_3);
}

console.log('full',reverse_3);