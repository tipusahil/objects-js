const products =[ 
 {name:'apple',         brand:'apple',      price:30000,type:'phone'},
 {name:'samsung',       brand:'samsung',    price:32000,type:'phone'},
 {name:'hp laptop',     brand:'microsoft',  price:33000,type:'laptop'},
 {name:'macbook laptop',brand:'apple',      price:133000,type:'laptop'},
 {name:'realme',        brand:'xiomi',      price:10000,type:'phone'},
];


// (for of) loop  in obj
// for(const product of products){
//     console.log(product);
// }

function matchProducts(products_object,search){
    for(const product of products_object){

        return search;
    }
}

const result = matchProducts(products,'phone');
console.log(result);
//node obj_search.js