//Acto 1
let numero = parseInt(prompt("Ingrese un número entero"));
if (numero < 0) {
  alert("El número es negativo");
} else {
  alert("El número es positivo");
};


//Acto 2
let numero2 = parseInt(prompt("Ingrese un número"));
let esPrimo = true;

if (numero2 <= 1) {
  let esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero2); i++) {
    if (numero2 % i == 0) {
      esPrimo = false; 
      break;
    }
  }
}
if (esPrimo) {
  console.log(numero2 + " es un número primo.");
} else {
  console.log(numero2 + " no es un número primo.");
}


//Acto 3
let temperatura = parseFloat(prompt("Ingrese la temperatura a convertir:"));
let unidad = prompt("Ingrese la unidad de temperatura (Celsius o Fahrenheit):");

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

if (unidad.toLowerCase() === "celsius") {
  let temperaturaConvertida = celsiusToFahrenheit(temperatura);
  console.log(temperatura + " grados Celsius equivalen a " + temperaturaConvertida + " grados Fahrenheit.");
} else if (unidad.toLowerCase() === "fahrenheit") {
  let temperaturaConvertida = fahrenheitToCelsius(temperatura);
  console.log(temperatura + " grados Fahrenheit equivalen a " + temperaturaConvertida + " grados Celsius.");
} else {
  console.log("Unidad de temperatura inválida. Por favor, ingrese 'Celsius' o 'Fahrenheit'.");
}


//Acto 4
function calcularTotalCompra(precios) {
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
      total += precios[i];
    }
    return total;
  }
  
  let precios = [];
  
    while (true) {
    let precio = parseFloat(prompt("Ingrese el precio del producto (o 'total' para finalizar):"));
    if (isNaN(precio)) {
      break;
    }
    precios.push(precio);
  }
  
  let totalCompra = calcularTotalCompra(precios);
  
  console.log("El total de la compra es: " + totalCompra);
