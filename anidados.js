/*
Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.

*/

function objetos(obj) {
 if (!Object.keys(obj).length){
  return undefined
 }
 let iter = (obj) => {
  const key = 'a';
  if (obj[key] && obj[key].b){
    return obj[key].b;
  }
  for (let i in obj){
    if(!(obj[i] instanceof Object)) continue;
    if (iter(obj[i])) return iter (obj[i]);
    continue
  }
 }
 return iter(obj);
}

console.log(objetos({ a: 1 }));
console.log(objetos({ a: { b: { c: 3 } } }));
console.log(objetos({ b: { a: 1 } }));
console.log(objetos({ a: { b: 2 } }));
console.log(objetos({ d: 3, f: { r: { t: 3 }, u: { p: 8, a: { b: { c: 3 } } } } }));
