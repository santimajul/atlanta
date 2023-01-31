/*Escribir un algoritmo que imprima: los numeros del 1 al 100,
 con la condicionque si el numero a imprimir es multiplo de 3,
  imprima el sting: 'Fizz' y si es multiplo de 5 imprima: 'Buzz'.
y si es multiplo de ambos imprima: 'FizzBuzz'. 

for(let i = 1 ; i <= 100 ; i++){
    let premio = 'Fizz';
    let premia = 'Buzz';
    document.write(`<br> <b>${i}</b>`);
    if(i%3 === 0 && i%5 === 0){
        document.write(': ' + premio + premia)
    }else if(i%3 === 0){
         document.write(': ' + premio)
     }else if(i%5 === 0){
         document.write(': ' + premia)
     }
}*/



/* Carrera

let concurso = ['Ana', 'Oswaldo', 'Raul', 'Celia', 'Maria', 'Antonio'];

concurso.splice(2,1,'Celia');
concurso.splice(3,1,'Raul');
concurso.splice(2,0,'Roberto','Amaya')
concurso.unshift('Marta')
document.write(concurso);*/



/*Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

let i = parseInt(prompt('cantidad de pares de numeros'))
let total=0;
let ct = 0;

let sumador = (num1, num2) => {
    let suma=0;
    if(num1 % 2 === 0 && num2 % 2 === 0 ){
        suma +=num1 + num2;
        return suma;
    }else if(num2 % 2 === 0 ){
        suma +=num2;
        return suma;
    }else if(num1 % 2 === 0 ){
        suma +=num1;
        return suma;
    }

}
while(ct < i){

    let num1 = parseInt(prompt('numero 1: '));
    let num2 = parseInt(prompt('numero 2: '));

    let plus= sumador(num1,num2);

    total +=plus;
    ct++;
}


document.write(total);*/



/* DIBUJITOS

let filas = parseInt(prompt('Cantidad de filas'));
let columnas = parseInt(prompt('Cantidad de columnas'));
let cont = 0;

while(cont<filas){
    

  for(let i=0; i< columnas; i++){  
      if(i > cont){
        document.write(' ')
      }else{
        document.write('*');
      }
    }

    document.write('<br>');

    cont++;
}
*/

const parrafo = document.querySelector("p")

document.write(parrafo)
