/* obj k  dot notation & []notation diye  change kinba print kora hoi. */

const collage = {

    name: 'CPI',
    "for 3rd bracket notaton": 'only change by []notation ',
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
collage.teachers.CIVIL = '100jon';// obj er kuno property er value evabe dot(.) diye change kora jai.

console.log(collage.teachers); //output e CIVIL key/property er value change dekabe.


// 3rd bracket []notation diye: 
collage['teachers']['CST'] = '300jon'; /* obj er kuno property er value evabe 3rd bracket[] notation diye change kora jai. */

console.log(collage.teachers.CST); //output e CIVIL key/property er value change dekabe.


/*
keno []notation useful: 
etar arekta subida hocce kuno obj er property name jodi multiple word er hoi. tkn seta k dot diye deefine kore change kinba print kora jaina.kintu 3rd bracket notation diye multiple word er obj property er value change kinba print kora jai jmn: 
 */
collage['for 3rd bracket notaton'] = 'changeed';
console.log(collage);
console.log(collage['for 3rd bracket notaton']);//output: changeed karon 3rd bracket notetion er maddome value change kora hoyece.

// node obj_dot_bracket_notation.js



