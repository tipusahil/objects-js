// kuno obj er property delete jevabe kora hoi: 

const my = {
    name: 'tipu',
    age: 22,
    class: 10,
    notetion: '3rd bracket'
}
console.log(my);
delete my.age;//evabei muloto delete kore etar karone my obj er age name jei property/key ase seta delete hoye jabe.
console.log(my);

my['notation'] = 'change by []noteion';
console.log(my)
