console.log('Cópia por valor vs referência');

var primitivo1 = 1;
var primitivo2 = primitivo1; 
primitivo2 = 2;

console.log(primitivo1);
console.log(primitivo2);

var objeto1 = { x:1 };
var objeto2 = objeto1;
objeto2.x = 2;

console.log(objeto1);
console.log(objeto2);