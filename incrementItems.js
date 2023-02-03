/* 
function incrementItems(arr) {
  for (let i = 0; i < array.length; i++) {
    arr[i] === arr[i] + 1
  }

  return array
}

buscar los errores en la funcion:

1. El argumento es un objeto nombrado como arr, y se esta haciendo referencia a una variable que no existe
array. 
2. En el for se esta asignando en cada ciclo el mismo valor aumentado 1, no estoy comparando un resultado. 
cambiamos === por asignacion =. 

*/

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1
  }

  return arr;
}
console.log(incrementItems([0, 1, 2, 3]))
console.log(incrementItems([2, 4, 6, 8]))
console.log(incrementItems([-1, -2, -3, -4]))
