//Acto 1
function obtenerSuma(numeros) {
    var numeros = [2, 4, 6, 8, 10, 12, 16, 19];
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  
  var sumaTotal = obtenerSuma();
  console.log(sumaTotal);


//Acto 2
function obtenerPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
      }
    }
    return pares;
  }
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosPares = obtenerPares(numeros);
  console.log(numerosPares);

  //Acto 3
  function obtenerPromedioPonderado(notas, pesos) {
    // Verificar si los arreglos tienen la misma longitud
    if (notas.length !== pesos.length) {
      throw new Error('Los arreglos deben tener la misma longitud');
    }
  
    let sumaPonderada = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaPonderada += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
  
    const promedioPonderado = sumaPonderada / sumaPesos;
    return promedioPonderado;
  }
  
  const notas = [85, 90, 78, 92];
  const pesos = [0.3, 0.4, 0.2, 0.1];
  
  const promedio = obtenerPromedioPonderado(notas, pesos);
  console.log(promedio);
  

//Acto 4
function obtenerMaximo(numeross) {
    let maximo = numeross[0];
  
    for (let i = 1; i < numeross.length; i++) {
      if (numeross[i] > maximo) {
        maximo = numeross[i];
      }
    }
  
    return maximo;
  }
  
  const numeross = [6, 8, 4, 13, 3, 12, 5];
  console.log(obtenerMaximo(numeross));