//Calculador de numeros primos y factoriales

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Función para calcular los números primos hasta un límite
  function numerosPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
      if (esPrimo(i)) primos.push(i);
    }
    return primos;
  }
  
  // Función para calcular el factorial de un número
  function factorial(num) {
    let resultado = 1;
    for (let i = num; i > 0; i--) {
      resultado *= i;
    }
    return resultado;
  }
  
  //Uso de las funciones
  let opcion = prompt("Ingrese la opción que desea calcular: \n1. Números primos\n2. Factorial");
  switch(opcion) {
      case "1":
          let limite = prompt("Ingrese el límite para calcular los números primos: ");
          let primos = numerosPrimos(limite);
          console.log("Números primos hasta " + limite + ": " + primos);
          break;
      case "2":
          let numFactorial = prompt("Ingrese el número para calcular su factorial: ");
          let resultadoFactorial = factorial(numFactorial);
          console.log("Factorial de " + numFactorial + ": " + resultadoFactorial);
          break;
      default:
          alert("Opción no válida");
  }
  