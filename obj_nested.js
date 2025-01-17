/* ekta obj er vitore arekta obj thaklee tkn seta k nested obj bole. ortat vitorere obj k kei nested boj bole */

const collage = {

    name: 'CPI',
    department: ['CST','CIVIL','Mechanical','EEE'],
    students: 5000,

    teachers: { // etai muloto nested obj,karon eta ekta obj er vitore child obj

        CIVIL: '5jon teachers',
        CST: '6jon teachers',
    }
}

console.log(collage);

collage.department[2] = 'mechoni';// obj er modde array thakle tar vitorer value evabe index numbe diye difine kore change korte hoi,ar joid sob gulo change korte hoi thle index number dewar drkr nai.
console.log(collage.department);

// nested obj er data change,print korte caile niser niome korte hoi.

// dot(.) notation diye: 
collage.teachers.CIVIL = '100jon';// nested obj er data evabe change kora hoi.

// 3rd bracket []notation diye: 
collage['teachers']['CST'] = '300jon'; //evabe []3rd bracket notation diyew obj kinba nested obj er value change kora jai, print kora jai.

console.log(collage.teachers); //output e CIVIL key/property er value change dekabe.

// code obj_nested.js
