//Acto 1
function esMayorEdad(edad) {

    let esMayor = false;
  
    if (edad >= 18) {
      esMayor = true;
    }
  
    return esMayor;
  }
  let edad = parseInt(prompt("Ingrese su edad:"));
  let esMayor = esMayorEdad(edad);
  console.log(esMayor);


//Acto 2
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area; 
 }
 
 let base = parseFloat(prompt("Ingrese la base del rectángulo"));
 let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));
 let resultado = calcularAreaRectangulo(base, altura);
 
 console.log(resultado);


 //Acto 3
 function esPalindromo (cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
 
   let esPalindromo = true;
   for (let i = 0; i < cadena.length / 2; i++) {
     if (cadena[i] !== cadena[cadena.length - 1 - i]) {
       esPalindromo = false;
       break;
     }
   }
 
   return esPalindromo;
 }
 
 let palabra = prompt("Ingrese una palabra:");
 let resultadoPalin = esPalindromo(palabra);
 
 console.log(resultado);


 //Acto 4
 function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
  }
  
  let numero = generarNumeroAleatorio();
  console.log(numero);