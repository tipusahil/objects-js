/*object knon-primitive object bola hoi.


object declare korar syntext ta kusuta css er er moto syntex.

1.const = varaible declare korar keyword.
2.iphone12 = variable name.
 3.  = { ojbect er code block} = curly bracket er vitore jai thake sob gulo k object er code block er upodan dhore newa hoi.

 4.color,price,cyz = property iphone12 er price/xyz property
 5.apple,white = eshob hocce property er value

 6. key/properyt er value likar pore koma (,) use korte hobe, semiclone use kora jabena
7.abr caile property/key er jaigai aro ekta object lika jabe.. niser warrenty er niome.
8.object er  key er value te array o lika jai.
9. object er property/key k caile arekta sub object o lika jai.
*/

const jela ='bandorban';// egulaw bolte gele object but basic ( primitive type object)
const city =true ;//change kora jabena.
const num = 22;//change kora jabena tai primitive type obj

// niser object k non-primitive type object bola hoi.ar uporer object k primitive(basic)type object bola hoi

// non-primitive obj e multiple type data raka jai, tai take non-primitivee type obj bole.
// object example 1
const iphone12 = {
    brand : 'apple',
    // brand ta hocce key/property & apple hocce tar (key/property)er value.
    color: 'silver white',

   'body type': 'steel',//key/property name multiple word er hole quetetion er vitoree likte hobe.jmn: "book name": 'bangla',
   
    price : 50000,
    bettary: '3500mah',
    variant:['256gb','128gb','64gb'],//object key/property er value te array o lika jai.

    warrenty : {
        date: '2year',
        replace: 'without any scase'//last key/propery er value er pore koma(,) caile dewa/na dewa jabe.
    }

}




// object example 2
const exams = {
    subject: 'quran',
    date : '17january,2025',
    time : '10:30',
    chapter:['fateha','jakat','biye'],//object key/property er value te array o lika jai.

    examss: {
        mark:100,
        exam:'final',
        bisoy: 'bangla',//last er prperty er value er sesh e koma dewa jai,abr na dilew prbm nai.
    }



    "center / hall" : 'lohagara',//
/* property er name multiple word wala hole evabe quetetion er vitore likte hobe, thle error dibena. jmn: "book name": 'bangla',
amarBook: "banlgla",//evabew lika jai. jodi obj er property/key er name multiple word likar proyojon hoi.
  */

}