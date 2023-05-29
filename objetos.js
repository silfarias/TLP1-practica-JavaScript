//Acto 1
const producto = {
    nombre: "Producto A",
    precio: 20.00,
    cantidad: 5,
  };
  
  function calcularTotal(producto) {
  const total = producto.precio * producto.cantidad;
  return total
    
  }
  
  const totalPagar = calcularTotal(producto);
  console.log(totalPagar);

  //Acto 2
  const persona = {
    nombre: "José",
    edad: 24,
    profesion: "Programador"
  };
  
  function presentarPersona(persona) {
    console.log(`Hola, mi nombre es ${persona.nombre}. Tengo ${persona.edad} años y soy ${persona.profesion}.`);
  }
  
  presentarPersona(persona);
  

  //Acto 3
  function esMayorEdad(persona) {
    if (persona.edad >= 18) {
        return true;
    }   else {
        return false; 
    }
}
  
// Ejemplos
const persona1 = {
  nombre: "Javier",
  edad: 25,
  profesion: "Ingeniero"
};
const persona2 = {
  nombre: "María",
  edad: 17,
  profesion: "Estudiante",
};

console.log(esMayorEdad(persona1));
console.log(esMayorEdad(persona2));