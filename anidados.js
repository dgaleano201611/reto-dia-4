function objetos(obj){
    if (!obj.a){
      return undefined;
    }
    if(!obj.a.b){
      return undefined;
    }
    return obj.a.b;
  }

console.log(objetos({a:1}))
console.log(objetos({a:{b:{c:3}}}))
console.log(objetos({b:{a:1}}))
console.log(objetos({a:{b:2}}))